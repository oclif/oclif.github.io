---
title: Table
---

## `CliUx.ux.table`

Displays tabular data

```typescript
CliUx.ux.table(data, columns, options)
```

Where:

- `data`: array of data objects to display
- `columns`: [Table.Columns](https://github.com/oclif/core/blob/main/src/cli-ux/styled/table.ts)
- `options`: [Table.Options](https://github.com/oclif/core/blob/main/src/cli-ux/styled/table.ts)

`CliUx.ux.table.flags()` returns an object containing all the table flags to include in your command.

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

Passing `{only: ['columns']}` or `{except: ['columns']}` as an argument into `cli.table.flags()` will allow/block those flags from the returned object.

`CliUx.Table.Columns` defines the table columns and their display options.

```typescript
const columns: CliUx.Table.Columns = {
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

`CliUx.Table.Options` defines the table options, most of which are the parsed flags from the user for display customization, all of which are optional.

```typescript
const options: CliUx.Table.Options = {
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
import {Command, CliUx} from '@oclif/core'
import axios from 'axios'

export default class Users extends Command {
  static flags = {
    ...CliUx.ux.table.flags()
  }

  async run() {
    const {flags} = await this.parse(Users)
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')

    CliUx.ux.table(users, {
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
      printLine: this.log.bind(this),
      ...flags, // parsed flags
    })
  }
}
```

Displays:

```shell
$ example-cli users
Name                     Company
Leanne Graham            Romaguera-Crona
Ervin Howell             Deckow-Crist
Clementine Bauch         Romaguera-Jacobson
Patricia Lebsack         Robel-Corkery
Chelsey Dietrich         Keebler LLC
Mrs. Dennis Schulist     Considine-Lockman
Kurtis Weissnat          Johns Group
Nicholas Runolfsdottir V Abernathy Group
Glenna Reichert          Yost and Sons
Clementina DuBuque       Hoeger LLC

$ example-cli users --extended
Name                     Company            ID
Leanne Graham            Romaguera-Crona    1
Ervin Howell             Deckow-Crist       2
Clementine Bauch         Romaguera-Jacobson 3
Patricia Lebsack         Robel-Corkery      4
Chelsey Dietrich         Keebler LLC        5
Mrs. Dennis Schulist     Considine-Lockman  6
Kurtis Weissnat          Johns Group        7
Nicholas Runolfsdottir V Abernathy Group    8
Glenna Reichert          Yost and Sons      9
Clementina DuBuque       Hoeger LLC         10

$ example-cli users --columns=name
Name
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque

$ example-cli users --filter="company=Group"
Name                     Company
Kurtis Weissnat          Johns Group
Nicholas Runolfsdottir V Abernathy Group

$ example-cli users --sort=company
Name                     Company
Nicholas Runolfsdottir V Abernathy Group
Mrs. Dennis Schulist     Considine-Lockman
Ervin Howell             Deckow-Crist
Clementina DuBuque       Hoeger LLC
Kurtis Weissnat          Johns Group
Chelsey Dietrich         Keebler LLC
Patricia Lebsack         Robel-Corkery
Leanne Graham            Romaguera-Crona
Clementine Bauch         Romaguera-Jacobson
Glenna Reichert          Yost and Sons
```
