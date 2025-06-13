---
tags:
- "group: space-settings"
---
# apic space-settings:update

Update the Space Setting object

## Synopsis

Update the Space Setting object
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url
          - catalog_url
          - space_url

```
apic space-settings:update [flags]
```

## Possible Usages

```
apic space-settings:update [flags] SPACE_SETTING_FILE
```

## Request examples

-----------------------------------------------------------------------
#### Example of fields which can be updated on a space settings object.
-----------------------------------------------------------------------

```
allowed_product_visibility:
  subscribe:
    enabled: false
    type: authenticated
  view:
    enabled: false
    type: public
custom_notification_templates_enabled: true
email_sender:
  address: acme-mail@example.com
  custom: true
  name: ACME Mail
invitation_ttl: 172800
subscription_task_approval_retention: 60
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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
