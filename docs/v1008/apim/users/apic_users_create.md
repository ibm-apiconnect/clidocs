---
tags:
- "group: users"
---
# apic users:create

Create a User object

## Synopsis

Create a User object
          
          Required fields:
          - username
          
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
apic users:create [flags]
```

## Possible Usages

```
apic users:create [flags] USER_FILE
```

## Request examples

----------------------------
#### Example of user create.
----------------------------

```
email: acme@example.com
first_name: ACME
last_name: Lastname
name: acme
password: acme@123
summary: An example user create
title: ACME User
username: acmeuser
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
