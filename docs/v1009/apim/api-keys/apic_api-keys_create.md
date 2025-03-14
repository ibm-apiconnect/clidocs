---
tags:
- "group: api-keys"
---
# apic api-keys:create

Create a API Key object

## Synopsis

Create a API Key object
          
          Required fields:
          - client_type
          - description
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic api-keys:create [flags]
```

## Possible Usages

```
apic api-keys:create [flags] API_KEY_FILE
```

## Request examples

------------------------------
#### Example API Key creation.
------------------------------

```
client_type: toolkit
description: acme api key
name: acme-apikey
token_exp: 3719
ttl: 4150
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
