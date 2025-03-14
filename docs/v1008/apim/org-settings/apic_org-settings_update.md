---
tags:
- "group: org-settings"
---
# apic org-settings:update

Update the Organization Setting object

## Synopsis

Update the Organization Setting object
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic org-settings:update [flags]
```

## Possible Usages

```
apic org-settings:update [flags] ORG_SETTING_FILE
```

## Request examples

---------------------------------------------------------------------
#### Example of fields which can be updated on a org settings object.
---------------------------------------------------------------------

```
custom_notification_templates_enabled: true
email_sender:
  address: acme-mail@example.com
  custom: true
  name: ACME Mail
invitation_ttl: 172500
title: Updated ACME org settings
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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
