---
tags:
- "group: consumer-org-settings"
---
# apic consumer-org-settings:delete

Delete the Consumer Organization Setting object

## Synopsis

Delete the Consumer Organization Setting object

```
apic consumer-org-settings:delete [flags]
```

## Possible Usages

```

      apic consumer-org-settings:delete [flags] --space-initiated
      apic consumer-org-settings:delete [flags]

```

## Options

```
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
