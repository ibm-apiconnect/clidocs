---
tags:
- "group: credentials"
---
# apic credentials:update

Update the Application Credential object by name or id

## Synopsis

Update the Application Credential object by name or id
          
          Fields not allowed to be null:
          - client_id
          
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
          - app_url

```
apic credentials:update [flags]
```

## Possible Usages

```
apic credentials:update [flags] --space-initiated CREDENTIAL CREDENTIAL_FILE
apic credentials:update [flags] CREDENTIAL CREDENTIAL_FILE
```

## Request examples

-------------------------------------------------
#### Example of credential update at space scope.
-------------------------------------------------

```
client_id: acme
client_secret: acme1234
summary: An example credential update
title: Acme credential update
```

## Options

```
  -a, --app string            Application name or id (required)
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
