---
tags:
- "group: spaces"
---
# apic spaces:create

Create a Space object

## Synopsis

Create a Space object
          
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
apic spaces:create [flags]
```

## Possible Usages

```
apic spaces:create [flags] SPACE_FILE
```

## Request examples

-------------------------------
#### Example of space creation.
-------------------------------

```
name: acme-space
summary: An example space creation
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
