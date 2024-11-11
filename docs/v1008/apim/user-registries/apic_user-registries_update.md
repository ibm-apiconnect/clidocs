---
tags:
- "group: user-registries"
---
# apic user-registries:update

Update the User Registry object by name or id

## Synopsis

Update the User Registry object by name or id
          
          Fields not allowed:
          - owned
          - registry_type
          - user_registry_managed
          - correlation_data
          - integration_url
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url

```
apic user-registries:update [flags]
```

## Possible Usages

```

      apic user-registries:update [flags] USER_REGISTRY USER_REGISTRY_FILE

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
