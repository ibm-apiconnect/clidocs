---
tags:
- "group: themes"
---
# apic themes:disable

Disable one or more themes.

## Synopsis

Disable one or more themes and their dependent modules. The provided list of themes must be comma-separated.

```
apic themes:disable --mode portaladmin [flags]
```

## Possible Usages

```
apic themes:disable --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string    management server endpoint (required)
      --themes string    A list of themes separated by a comma. (required)
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
