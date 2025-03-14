---
tags:
- "group: apps"
---
# apic apps:create

Create a Application object

## Synopsis

Create a Application object
          
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
          - consumer_org_url

```
apic apps:create [flags]
```

## Possible Usages

```
apic apps:create [flags] --space-initiated APP_FILE
apic apps:create [flags] APP_FILE
```

## Request examples

---------------------------
#### Example of app create.
---------------------------

```
name: acme-app
summary: An example app create
title: ACME App
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string         management server endpoint (required)
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
