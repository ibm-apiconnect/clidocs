---
tags:
- "group: subscriptions"
---
# apic subscriptions:list

List the Subscription objects

## Synopsis

List the Subscription objects

```
apic subscriptions:list [flags]
```

## Possible Usages

```

      apic subscriptions:list [flags] --space-initiated
      apic subscriptions:list [flags] --scope space
      apic subscriptions:list [flags] --scope catalog
      apic subscriptions:list [flags]

```

## Options

```
  -a, --app string            Application name or id (required)
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --fields string         List of field names to return
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32           Maximum number of items to return
      --offset int32          Offset item number from list to begin return
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
      --plan string           Plan Name
      --product_url string    Product Url
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
