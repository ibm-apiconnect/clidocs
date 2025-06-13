---
tags:
- "group: consumer-org"
---
# apic consumer-org:get

Get a specific consumer org from a developer portal.

## Synopsis

Get a specific consumer org from the developer portal of the provided org and catalog. The id of a specific consumer organization needs to be provided. e.g. './apic --mode portaladmin consumer-org:get --server **api** --catalog **catalog** --org **org** acme-org'

```
apic consumer-org:get --mode portaladmin [flags]
```

## Possible Usages

```
apic consumer-org:get --mode portaladmin [flags] CONSUMER_ORG
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
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
