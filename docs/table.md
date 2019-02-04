---
title: Table
---

## `cli-ux.table`

Displays tabular data

```typescript
cli.table(data, columns, options)
```

Where:

- `data`: array of data objects to display
- `columns`: [Table.Columns](https://github.com/oclif/cli-ux/blob/master/src/styled/table.ts)
- `options`: [Table.Options](https://github.com/oclif/cli-ux/blob/master/src/styled/table.ts)

`cli.table.flags()` returns an object containing all the table flags to include in your command.

```typescript
{
  columns: Flags.string({exclusive: ['additional'], description: 'only show provided columns (comma-seperated)'}),
  sort: Flags.string({description: 'property to sort by (prepend '-' for descending)'}),
  filter: Flags.string({description: 'filter property by partial string matching, ex: name=foo'}),
  csv: Flags.boolean({exclusive: ['no-truncate'], description: 'output is csv format'}),
  extended: Flags.boolean({char: 'x', description: 'show extra columns'}),
  'no-truncate': Flags.boolean({exclusive: ['csv'], description: 'do not truncate output to fit screen'}),
  'no-header': Flags.boolean({exclusive: ['csv'], description: 'hide table header from output'}),
}
```

Passing `{only: ['columns']}` or `{except: ['columns']}` as an argument into `cli.table.flags()` will whitelist/blacklist those flags from the returned object.

`Table.Columns` defines the table columns and their display options.

```typescript
const columns: Table.Columns = {
  // where `.name` is a property of a data object
  name: {}, // "Name" inferred as the column header
  id: {
    header: 'ID', // override column header
    minWidth: '10', // column must display at this width or greater
    extended: true, // only display this column when the --extended flag is present
    get: row => `US-O1-${row.id}`, // custom getter for data row object
  },
}
```

`Table.Options` defines the table options, most of which are the parsed flags from the user for display customization, all of which are optional.

```typescript
const options: Table.Options = {
  printLine: myLogger, // custom logger
  columns: flags.columns,
  sort: flags.sort,
  filter: flags.filter,
  csv: flags.csv,
  extended: flags.extended,
  'no-truncate': flags['no-truncate'],
  'no-header': flags['no-header'],
}
```

Example class:

```typescript
import {Command} from '@oclif/command'
import {cli} from 'cli-ux'
import axios from 'axios'

export default class Users extends Command {
  static flags = {
    ...cli.table.flags()
  }

  async run() {
    const {flags} = this.parse(Users)
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')

    cli.table(users, {
      name: {
        minWidth: 7,
      },
      company: {
        get: row => row.company && row.company.name
      },
      id: {
        header: 'ID',
        extended: true
      }
    }, {
      printLine: this.log,
      ...flags, // parsed flags
    })
  }
}
```

Displays:

```shell
$ example-cli users
Name   Team
Jordan Sales
Jamie  Engineering

$ example-cli users --extended
Name   Team        ID
Jordan Sales       100
Jamie  Engineering 200

$ example-cli users --columns=name
Name
Jordan
Jamie

$ example-cli users --filter="team=sales"
Name   Team        ID
Jordan Sales       100

$ example-cli users --sort=team
Name   Team        ID
Jamie  Engineering 200
Jordan Sales       100
```
