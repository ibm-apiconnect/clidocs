---
tags:
- "group: subscriptions"
---
# apic subscriptions:create

Create a Subscription object

## Synopsis

Create a Subscription object
          
          Required fields:
          - product_url
          - plan
          
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
apic subscriptions:create [flags]
```

## Possible Usages

```

      apic subscriptions:create [flags] --space-initiated SUBSCRIPTION_FILE
      apic subscriptions:create [flags] SUBSCRIPTION_FILE

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
