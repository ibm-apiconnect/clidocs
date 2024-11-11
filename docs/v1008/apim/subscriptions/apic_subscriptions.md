---
tags:
- "group: subscriptions"
---
# apic subscriptions

Subscriptions operations

## Synopsis

Subscriptions operations

```
apic subscriptions [flags]
```

## Options

```
  -a, --app string                Application name or id (required)
  -c, --catalog string            Catalog name or id (required)
      --consumer-org string       Consumer Organization name or id (required)
      --consumer_org_url string   Consumer Org Url
      --expand string             List of transient field to expand
      --fields string             List of field names to return
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                      Help for subscriptions
      --limit int32               Maximum number of items to return
      --offset int32              Offset item number from list to begin return
  -o, --org string                Organization name or id (required)
      --output string             Write file(s) to directory, instead of STDOUT (default "-")
      --plan string               Plan Name
      --product_url string        Product Url
      --scope string              scope
  -s, --server string             management server endpoint (required)
      --space string              Space name or id (required)
      --space-initiated           space-initiated
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
