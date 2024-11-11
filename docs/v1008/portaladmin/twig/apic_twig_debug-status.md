---
tags:
- "group: twig"
---
# apic twig:debug-status

Shows the current state of twig debugging of a specific Portal site.

## Synopsis

View the current state of twig debugging of a specific Portal site, if you are unsure of it.

```
apic twig:debug-status --mode portaladmin [flags]
```

## Possible Usages

```

      apic twig:debug-status --mode portaladmin [flags]

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
