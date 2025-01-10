---
tags:
- "group: me"
---
# apic me:update

Update the Me object

## Synopsis

Update the Me object
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic me:update [flags]
```

## Possible Usages

```
apic me:update [flags] ME_FILE
```

## Request examples

--------------------------
#### Example of me update.
--------------------------

```
email: acmesteve@example.com
first_name: Acme
last_name: Steve
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
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
