---
tags:
- "group: orgs"
---
# apic orgs:update

Update the Organization object by name or id

## Synopsis

Update the Organization object by name or id
          
          Fields not allowed:
          - name
          - org_type
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic orgs:update [flags]
```

## Possible Usages

```
apic orgs:update [flags] ORG ORG_FILE
```

## Request examples

------------------------
#### Example org update.
------------------------

```
summary: An example org update
title: ACME Org Updated
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
