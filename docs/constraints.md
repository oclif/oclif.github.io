---
title: Command Flag Constraints
toc_max_heading_level: 5
---

As an alternative to declaring flag constraints at the flag-level using properties like `exclusive`, `exactlyOne`, etc,
flag constraints may also be declared at the command level, using a syntax that should be very familiar to users of `chai`
or `jest`.

As an example, here is how one could declare a command with the boolean flags `foo`, `bar`, and `baz`, and declare that
at exactly two of these flags must be used. E.g., `MyCLI --foo --baz` is acceptable but `MyCLI --foo` or `MyCLI --foo --bar --baz` would throw an error.

```typescript
import {Command, Flags, Constraints} from '@oclif/core'

export class MyCLI extends Command {
  static flags = {
    foo: Flags.boolean(),
    bar: Flags.boolean(),
    baz: Flags.boolean()
  }
  
  static constraints = [
    Constraints.flags('foo', 'bar', 'baz').are.requiredExactlyN(2)
  ]
    
  async run() {
    const {flags} = await this.parse(MyCLI)
    // ...
  }
}
```

## Constraint API Reference

### Top-level functions

#### `flag(name)`/`flags(name1, name2, ...)`

`flag()` and `flags()` are methods that act as "openers" for the constraint statements. The first accepts only one flag,
while the second accepts multiple flags.

#### `combinationOf(name1, name2, ...)`

Can be used in the arguments of `.dependentOn()` or `.exclusiveWith()` to denote a set of flags that are evaluated as a whole
instead of individually.

### Chainable properties

#### `.is`/`.are`
Optional chaining properties that allow you to write your constraints in something that reads more naturally.

The two constraints are equivalent, but you might find one of them easier to read.
```typescript
Constraint.flags('foo', 'bar').requiredAny()
```
```typescript
Constraints.flags('foo', 'bar').are.requiredAny()
```

### Constraining functions

Functions that act as constrainers on the flags specified in `flag()` or `flags()`.

#### `.dependentOn(name1, name2, ...)`

Indicate that the constrained flags require the presence of at least one other flag.

In this example, to use `foo`, one must also use `bar` or `baz`:
```typescript
Constraints.flag('foo').is.dependentOn('bar', 'baz')
```

Use `combinationOf()` to declare a set of flags to be evaluated together instead of separately.

Consider this example, which indicates that `foo` can only be used if either `bar` is used, or both `baz1` and `baz2` are used:
```typescript
Constraints.flag('foo').is.dependentOn('bar', Constraints.combinationOf('baz1', 'baz2'))
```

#### `.exclusiveWith(name1, name2, ...)`

Indicate that the constrained flags cannot be used if any of the flags specified here are also used.

In this example, `foo` cannot be used with `bar` or `baz`. Note that `bar` and `baz` are _not_ constrained relative to each other.
```typescript
Constraints.flag('foo').is.exclusiveWith('bar', 'baz')
```

Use `combinationOf()` to declare a set of flags to be evaluated together instead of separately.

Consider this example, which indicates that `foo` cannot be used if either `bar` is used, or the both `baz1` and `baz2` are used:
```typescript
Constraints.flag('foo').is.exclusiveWith('bar', Constraints.combinationOf('baz1', 'baz2'))
```

#### `.mutuallyDependent()`

Indicate that the constrained flags must be used either all together or not at all.

In this example, `foo` and `bar` must be used together or not at all:
```typescript
Constraints.flags('foo', 'bar').are.mutuallyDependent()
```

#### `.mutuallyExclusive()`

Indicate that at most one of the constrained flags may be used.

In this example, `foo` and `bar` cannot both be used:
```typescript
Constraints.flags('foo', 'bar').are.mutuallyExclusive()
```

#### `.requiredAll()`

Indicate that all the constrained flags must always be used.

In this example, `foo` and `bar` are both required flags.
```typescript
Constraints.flags('foo', 'bar').are.requiredAll()
```

#### `.requiredAny()`

Indicate that at least one of the constrained flags must be used.

In this example, you must use at least one of the flags, `foo`, `bar`, or `baz`:
```typescript
Constraints.flags('foo', 'bar', 'baz').are.requiredAny()
```

#### `.requiredAtLeastN(n)`

Indicate that at least N of the constrained flags must be used.

In this example, you must use at least two of the flags, `foo`, `bar`, or `baz`:
```typescript
Constraints.flags('foo', 'bar', 'baz').are.requiredAtLeastN(2)
```

#### `.requiredAtMostN(n)`

Indicate that at no more than N of the constrained flags must be used.

In this example, you must use no more than two of the flags, `foo`, `bar`, or `baz`:
```typescript
Constraints.flags('foo', 'bar', 'baz').are.requiredAtMostN(2)
```

#### `.requiredExactlyN(n)`

Indicate that exactly N of the constrained flags must be used.

In this example, you must use exactly two of the flags, `foo`, `bar`, or `baz`:
```typescript
Constraints.flags('foo', 'bar', 'baz').are.requiredExactlyN(2)
```

### Conditionals

Constraints can be made conditional on the satisfaction of certain criteria.

#### `.when`/`.unless`

Act as openers for conditions on constraints. `.unless` is equivalent to "when not".

```typescript
Constraints.flag('foo').is.requiredAll().when.thisIsTrue(someFn)
Constraints.flag('bar').is.requiredAll().unless.thisIsTrue(someOtherFn)
```

#### `.and`/`.or`

Logical operators for conditions.

By default, logical conditions are evaluated from left to right, as in the following example which may be thought of as `(fn1 || fn2) && fn3`:
```typescript
Constraints.flag('foo').is.requiredAll().when.thisIsTrue(fn1).or.thisIsTrue(fn2).and.thisIsTrue(fn3)
```

However, additional `.when` or `.unless` clauses may be used to define groups within the expression, as in this example which
may be thought of as `fn1 || (fn2 && fn3)`:
```typescript
Constraints.flag('foo').is.requiredAll().when.thisIsTrue(fn1).or.when.thisIsTrue(fn2).and.thisIsTrue(fn3)
```

#### `.allFlagCriteriaSatisfied(flagTester)`

Accepts an object whose keys are flag names and whose properties are methods that accept the flag value and return a boolean.
Satisfied if all methods return true.

In this example, `foo` and `bar` are mutually exclusive if `baz1` is equal to `5` AND `baz2` is equal to `7`:
```typescript
Constraints.flags('foo', 'bar').are.mutuallyExclusive().when.allFlagCriteriaSatisfied({
  baz1: (v) => v === 5,
  baz2: (v) => v === 7
})
```

#### `.anyFlagCriterionSatisfied(flagTester)`

Accepts an object whose keys are flag names and whose properties are methods that accept the flag value and return a boolean.
Satisfied if any method returns true.

In this example, `foo` and `bar` are mutually exclusive if `baz1` is equal to `5` OR `baz2` is equal to `7`:
```typescript
Constraints.flags('foo', 'bar').are.mutuallyExclusive().when.anyFlagCriterionSatisfied({
  baz1: (v) => v === 5,
  baz2: (v) => v === 7
})
```

#### `.thisIsTrue(flagTester)`

Accepts a method that accepts a mapping of flag names to values, and returns a boolean. Satisfied if the method returns true.

In this example, `foo` and `bar` are mutually exclusive if `baz1` is equal to `baz2`:
```typescript
Constraints.flags('foo', 'bar').are.mutuallyExclusive().when.thisIsTrue((flags) => flags.baz1 === flags.baz2)
```