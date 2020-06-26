---
title: Pretty Printable Errors
---

Often CLIs are used as handy tools and when things go wrong it’s useful to have additional context. In oclif we have added a couple of additional properties that can show extra context to the users when an error is displayed. The `code`, `ref` and `suggestions` will now be displayed if they are included. This will work with an existing oclif CLI by adding the latest @oclif/errors and @oclif/command to the CLI's package.json dependencies.

For example, using `this.error` with the additional properties:
```js
class TestError extends Command {
  async run() {
    this.error("An error has occurred!", {
      code: "OCLIF_ERR",
      ref: "https://oclif.io/docs/commands#thiserrormessage-string--error-options-code-string-exit-number",
      suggestions: ["Use these extra properties to provide additional context"],
    })
  }
}
```

would result with the following output:
```text
›   Error: An error has occurred!
›   Code: OCLIF_ERR
›   Try this: Use these extra properties to provide additional context
›   Reference: https://oclif.io/docs/commands#thiserrormessage-string--error-options-code-string-exit-number
```

If these properties are not provided then nothing changes and the CLI will continue to display the single error message output as it did before. Additionally, as part of this exercise we’ve added documentation around [Error Handling in oclif](/docs/error_handling) which should come in handy if the need arises to extend oclif’s default handling of errors.
