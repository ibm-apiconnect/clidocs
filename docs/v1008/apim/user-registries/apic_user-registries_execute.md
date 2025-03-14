---
tags:
- "group: user-registries"
---
# apic user-registries:execute

Execute a User Registry operation

## Synopsis

Execute a User Registry operation

```
apic user-registries:execute [flags]
```

## Possible Usages

```
apic user-registries:execute [flags] --test-config-only USER_REGISTRY_EXECUTE_FILE
apic user-registries:execute [flags] USER_REGISTRY
```

## Options

```
      --format string      Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --operation string   Operation to perform on the user registry (get_base_dn_list, validate_password) (required)
  -o, --org string         Organization name or id (required)
      --output string      Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string      management server endpoint (required)
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
