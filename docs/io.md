---
title: I/O Utilities
---

The following assumes you are in the `run()` method of an oclif [command](commands.md).

### this.log(message: string)

Output message to stdout.

```typescript
this.log('hello, world!')
```

### this.warn(message: string | Error)

Display an error or message as a warning

```typescript
this.warn('uh oh!')
this.warn(new Error('uh oh!'))
```

### this.error(message: string | Error, options: {code?: string, exit?: number})

Display error and exit. Also add a code to error object or exit status.

```typescript
this.error('uh oh!', {exit: 2})
this.error(new Error('uh oh!'))
```

### this.exit(code: number = 0)

Exit process. Defaults to status 0.

```typescript
this.exit()
this.exit(1)
```

### cli-ux

Common I/O utilities are provided via [cli-ux](https://github.com/oclif/cli-ux). These don't necessarily have to be used with oclif if you'd like to use them in another project.
