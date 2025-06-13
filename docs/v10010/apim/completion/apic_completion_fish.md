---
tags:
- "group: completion"
---
# apic completion fish

Generate the autocompletion script for fish

## Synopsis

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

`apic completion fish | source`

To load completions for every new session, execute once:

`apic completion fish > ~/.config/fish/completions/apic.fish`

You will need to start a new shell for this setup to take effect.

```
apic completion fish [flags]
```


## Options

```
  -h, --help              help for fish
      --no-descriptions   disable completion descriptions
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
