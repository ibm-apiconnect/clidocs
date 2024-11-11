---
tags:
- "group: cloud-settings"
---
# apic cloud-settings:update

Update the Cloud Setting object

## Synopsis

Update the Cloud Setting object
          
          Fields not allowed to be null:
          - email_sender
          - tls_client_profile_default_url
          
          Fields not allowed:
          - service_type
          - cloud_id
          - ibm_cloud
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic cloud-settings:update [flags]
```

## Possible Usages

```

      apic cloud-settings:update [flags] CLOUD_SETTING_FILE

```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
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
