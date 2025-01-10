---
tags:
- "group: config"
---
# apic config:set

Set or update configuration variables

## Synopsis

config_topic_longengagement

```
apic config:set NAME=VALUE ... --mode engagement [flags]
```

## Examples

```
cmd_config_set_examplesengagement
```


## Options

```
  -g, --global   list the global configuration variables
  -h, --help     Help for config:set
  -l, --local    list the local application configuration variables
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