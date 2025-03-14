---
tags:
- "group: consumer-orgs"
---
# apic consumer-orgs:create

Create a Consumer Organization object

## Synopsis

Create a Consumer Organization object
          
          Required fields:
          - owner_url
          
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
apic consumer-orgs:create [flags]
```

## Possible Usages

```
apic consumer-orgs:create [flags] --space-initiated CONSUMER_ORG_FILE
apic consumer-orgs:create [flags] CONSUMER_ORG_FILE
```

## Request examples

------------------------------------------------
#### Example consumer org create at space scope.
------------------------------------------------

```
name: acme-consumer-org
owner_url: https://api.acme-apim.example.com/api/user-registries/acme-org/acme-user-registry/users/acme-user
summary: An example consumer org create
title: ACME Consumer Org
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
