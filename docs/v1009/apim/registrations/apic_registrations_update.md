---
tags:
- "group: registrations"
---
# apic registrations:update

Update the Registration object by name or id

## Synopsis

Update the Registration object by name or id
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic registrations:update [flags]
```

## Possible Usages

```
apic registrations:update [flags] REGISTRATION REGISTRATION_FILE
```

## Request examples

------------------------------------
#### Example of Registration update.
------------------------------------

```
client_secret: password456
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
summary: An example registration update
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
