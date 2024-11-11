---
tags:
- "group: user-registries"
---
# apic user-registries:test-connection

Test a User Registry connection

## Synopsis

Test a User Registry connection

```
apic user-registries:test-connection [flags]
```

## Possible Usages

```

      apic user-registries:test-connection [flags] --test-config-only USER_REGISTRY_TEST_CONNECTION_FILE
      apic user-registries:test-connection [flags] USER_REGISTRY TEST_CONNECTION_CREDENTIALS_FILE

```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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
