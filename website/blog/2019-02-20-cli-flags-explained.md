---
author: Casey Watts and Jeff Dickey
authorURL: https://twitter.com/kyloma
title: CLI Flags Explained
---

`oclif` makes it easy to create a command line interface (CLI) in node. Most commands have **parameters** — also known as "flags", "args", and sometimes "options". This blog post explains what these parameters are and when to use them. We also have a new feature that makes it easier for users to detect typos when using parameters.

_Note the following describes GNU-style flags. Not all CLIs follow this convention, but it is the most commonly used._

## Parts of Speech

Any command line interface command has a few standard "parts of speech".  As a user of CLI tools, knowing these parts of speech can help you make fewer typos. It can also help you understand complex commands other people share with you more quickly. If you are designing a CLI tool it is even more important to understand these parts of speech, so you can come up with the most ergonomic interface for your users.

DIAGRAM OF PARTS OF SPEECH EXAMPLE

Of the many ways you can pass data to a CLI command, three of them are **parameters** that are always to the "right" of the command. The three types of parameters are **argument**, **short flag**, and **long flag**.

### Example `ls`
One of the  most common and simplest unix commands is `ls` which "lists" the contents of a directory.

#### command

```
ls
```

This command `ls` works on its own, as a standalone **command**. Without any parameters this command will list the contents of the current folder, using an implied `.` directory.

#### argument

```
ls .
ls ~/code/some-repo-name
```

If you pass a command **argument** to this command, like the directory name `.` (current folder) or `~/code/some-repo-name`, it will list the contents of that directory instead.

An argument is anything to the right of a command that is not a flag. An argument can come before or after flags.

#### Long flag
To list additional files that are normally hidden (like `~/.bashrc`), you can use a flag on the `ls` command. `ls --all` is the **long flag** form. A long flag always uses a double dash, and it is always represented by multiple characters.

```
ls --all
ls . --all
```

#### Short flag

There is also a **short flag** form of this flag: `ls -a`. The `a` is short for `all` in this case. A short flag always uses a single dash, and it is always represented by a single letter.

```
ls -a
ls . -a
```

Short flags can **stack** too, so you don't need a separate dash for each one. Order does not matter for these, unless passing a flag argument.

```
ls -la
```

#### Flag arguments
Many flags accept an **option**, which is a "flag argument" (as opposed to a "command argument"). In general a command's parameters can be in any order, but flags that accept options must have the option directly after the flag.

For an example, here the `-x` flag does not accept an option but the `-f` flag does. `archive.tar` is the option being passed to `-f`.

```
tar -x -f archive.tar
tar -xf archive.tar
```

A flag and its option can be separated by a space ` ` or an equals sign `=`. Interestingly, short flags (but not long flags) can even skip the space, although many people find it much easier to read with the space or equals sign.

These three are all valid and equivalent:

```
tar -f archive.tar
tar -f=archive.tar
tar -farchive.tar
```

Long flags must have a space or equals sign to separate the flag from its option.

```
git log --pretty=oneline
git log --pretty oneline
```

## Other Ways of Passing Data

We've covered **parameters**, which are **arguments**, **short flags** and **long flags**. There are two other ways to pass data to a command: **environment variables** ("env vars"), or **standard input** ("stdin"). These won't be covered in this blog post.


## Designing a Command

Scenario: we want to design an oclif command that echos an input like "Casey", and returns "hi, Casey!". There are many ways the user could pass this in, and here we show an example of each type of input.

### argument

```
greet-me Casey
```

### short flag with argument

```
greet-me -n Casey
greet-me -n=Casey
greet-me -nCasey
```

### long flag with argument

```
greet-me --name=Casey
greet-me --name Casey
```

### environment variable

```
NAME=Casey greet-me
```

### standard input

```
echo "Casey" | greet-me
```

## Command ergonomics

### Short flag vs long flag
Many CLI commands allow for both long flag and short flag forms. In the Heroku CLI every flag has at least a long flag form and roughly half of the flags also have a short flag form.

The long flag form is easier to read, but takes more characters to type. It is often most useful when you want someone to understand a particular command statement quickly and easily, such as in a README.

The short flag form is quicker to type, and is often better for frequently used commands. Short flags are especially useful when stacking short flags together.


## Did you mean?
It is really easy to make a typo and use one dash instead of two, or vice versa. This "Long flag / short flag mismatch" is quite common. We hope that by catching these typos we will help you make fewer typos, save you from frustration, and speed up your development.

`oclif` can now detect when you accidentally have the wrong number of dashes for a command, and suggest a change to the command.

```
heroku config --s
> did you mean "heroku config -s"?
```

```
heroku config -something-long
> did you mean "heroku config --something-long"?
```

```
heroku config ---something-long
> did you mean to use FEWER DASHES? (something like this?)
```

This is an example of a "did you mean?" command, like this ruby plugin [did_you_mean](https://github.com/yuki24/did_you_mean).
