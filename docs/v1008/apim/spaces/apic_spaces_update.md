---
tags:
- "group: spaces"
---
# apic spaces:update

Update the Space object by name or id

## Synopsis

Update the Space object by name or id
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url
          - catalog_url

```
apic spaces:update [flags]
```

## Possible Usages

```
apic spaces:update [flags] SPACE SPACE_FILE
```

## Request examples

-----------------------------
#### Example of space update.
-----------------------------

```
summary: An example space updation
title: Acme space
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string    management server endpoint (required)
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
