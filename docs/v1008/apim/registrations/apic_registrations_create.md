---
tags:
- "group: registrations"
---
# apic registrations:create

Create a Registration object

## Synopsis

Create a Registration object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic registrations:create [flags]
```

## Possible Usages

```
apic registrations:create [flags] REGISTRATION_FILE
```

## Request examples

--------------------------------------
#### Example of Registration creation.
--------------------------------------

```
client_id: 5407142345766o1u
client_secret: password123
client_type: toolkit
name: acme-registration
scopes:
- cloud:view
- cloud:manage
- provider-org:view
- provider-org:manage
- org:view
- org:manage
- product-drafts:view
- product-drafts:edit
- api-drafts:view
- api-drafts:edit
- child:view
- child:create
- child:manage
- product:view
- product:stage
- product:manage
- approval:view
- approval:manage
- api-analytics:view
- api-analytics:manage
- consumer-org:view
- consumer-org:manage
- app:view:all
- app:manage:all
- my:view
- my:manage
- webhook:view
state: enabled
summary: An example registration creation
title: Acme registration
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
