---
tags:
- "group: client-creds"
---
# apic client-creds:set

Set the client configuration parameters. ClientID and Client Secret.

## Synopsis

Set the client configuration parameters. ClientID and Client Secret.

```
apic client-creds:set /path/to/creds/json ... --mode consumer [flags]
```

## Examples

```
$ apic client-creds:set /Users/local_user/credential.json

```


## Options

```
  -g, --global   list the global configuration variables
  -h, --help     Help for client-creds:set
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
