---
tags:
- "group: consumer-org-settings"
---
# apic consumer-org-settings:update

Update the Consumer Organization Setting object

## Synopsis

Update the Consumer Organization Setting object
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic consumer-org-settings:update [flags]
```

## Possible Usages

```
apic consumer-org-settings:update [flags] --space-initiated CONSUMER_ORG_SETTING_FILE
apic consumer-org-settings:update [flags] CONSUMER_ORG_SETTING_FILE
```

## Request examples

--------------------------------------------------------
#### Example consumer-org setting update at space scope.
--------------------------------------------------------

```
invitation_ttl: 172800
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
