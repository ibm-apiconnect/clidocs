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

## Request examples

-----------------------------------------------------------------------
#### Example of fields which can be updated on a cloud settings object.
-----------------------------------------------------------------------

```
access_token_expires_in: 28800
access_token_keystore_urls:
- https://acme-apim.example.com/api/orgs/keystores
api_key_enabled: true
api_key_expires_in: 300
api_key_multiple_uses: false
audit_setting:
  audit_reads:
    enabled: false
    response_data_to_http_endpoints:
      enabled: false
      list_results_limit: 0
  enabled: false
  mode: non_block
email_sender:
  address: acme-mail@example.com
  name: ACME Administrator
gateway_service_default_urls:
- https://acme-apim.example.com/api/orgs/availability-zones/gateway-service1
- https://acme-apim.example.com/api/orgs/availability-zones/gateway-service2
id_token_keystore_urls:
- https://acme-apim.example.com/api/orgs/keystores
invitation_ttl: 172800
mail_server_url: https://acme-apim.example.com/api/orgs/mail-servers
provision_sandbox_catalog: true
refresh_expires_in: 57600
refresh_token_enabled: false
reset_password_ttl: 172800
restrict_member_manage_permission: false
self_signed_token_keystore_urls:
- https://acme-apim.example.com/api/orgs/keystores
sso_settings:
  enabled: false
  registration_urls: []
  user_registry_urls: []
sync_roles_setting:
  enabled: false
temporary_token_format: b64
temporary_token_keystore_urls:
- https://acme-apim.example.com/api/orgs/keystores
tls_client_profile_default_url: https://acme-apim.example.com/api/orgs/tls-client-profiles
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
