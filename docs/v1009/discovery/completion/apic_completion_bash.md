---
tags:
- "group: completion"
---
# apic completion bash

Generate the autocompletion script for bash

## Synopsis

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

`source <(apic completion bash)`

To load completions for every new session, execute once:

### Linux

`apic completion bash > /etc/bash_completion.d/apic`

### macOS

`apic completion bash > $(brew --prefix)/etc/bash_completion.d/apic`

You will need to start a new shell for this setup to take effect.

```
apic completion bash
```


## Options

```
  -h, --help              help for bash
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
