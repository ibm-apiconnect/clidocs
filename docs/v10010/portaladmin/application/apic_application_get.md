---
tags:
- "group: application"
---
# apic application:get

Get a specific application from a developer portal.

## Synopsis

Get a specific application from the developer portal of the provided org and catalog. The id of a specific application needs to be provided. e.g. './apic --mode portaladmin application:get --server **api** --catalog **catalog** --org **org** my-first-application '

```
apic application:get --mode portaladmin [flags]
```

## Possible Usages

```
apic application:get --mode portaladmin [flags] APPLICATION
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
