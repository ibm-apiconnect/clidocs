---
tags:
- "group: users"
---
# apic users:update

Update the User object by name or id

## Synopsis

Update the User object by name or id
          
          Fields not allowed:
          - identity_provider
          - username
          - salt
          - correlation_data
          - force_password_change
          - last_login_at
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url
          - user_registry_url

```
apic users:update [flags]
```

## Possible Usages

```
apic users:update [flags] USER USER_FILE
```

## Request examples

----------------------------
#### Example of user Update.
----------------------------

```
email: acme-updated@example.com
first_name: ACMEUpdated
last_name: LastnameUpdated
password: acme-updated@123
summary: An example user update
title: ACME User Updated
```

## Options

```
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string             Organization name or id (required)
      --output string          Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string          management server endpoint (required)
      --user-registry string   User Registry name or id (required)
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
