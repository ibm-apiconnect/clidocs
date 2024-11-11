---
tags:
- "group: consumer-orgs"
---
# apic consumer-orgs:update

Update the Consumer Organization object by name or id

## Synopsis

Update the Consumer Organization object by name or id
          
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
apic consumer-orgs:update [flags]
```

## Possible Usages

```

      apic consumer-orgs:update [flags] --space-initiated CONSUMER_ORG CONSUMER_ORG_FILE
      apic consumer-orgs:update [flags] CONSUMER_ORG CONSUMER_ORG_FILE

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
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
