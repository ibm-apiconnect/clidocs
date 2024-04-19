# apic config:clear

Delete all configuration variables

## Synopsis

Delete all configuration variables

```
apic config:clear --mode consumer [flags]
```

## Examples

```
$ apic config:clear --mode consumer
Deleted config catalog
Deleted config org
Deleted config space

$ apic config:clear --global --mode consumer
Deleted config catalog

```

## Options

```
  -g, --global   list the global configuration variables
  -h, --help     Help for config:clear
  -l, --local    list the local application configuration variables
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
