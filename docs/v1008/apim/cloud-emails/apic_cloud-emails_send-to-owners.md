---
tags:
- "group: cloud-emails"
---
# apic cloud-emails:send-to-owners

Email provider org owners

## Synopsis

Send an email to owners of provider orgs

```
apic cloud-emails:send-to-owners [flags]
```

## Possible Usages

```
apic cloud-emails:send-to-owners [flags] EMAIL_PROVIDER_ORG_OWNERS_FILE
```

## Request examples

------------------------------------------
#### Example of cloud emails send to owner
------------------------------------------

```
body: Example email to provider org owner
content_type: text
org_urls:
- https://api.acme-apim.example.com/api/orgs/acme-org
subject: Email to provider org owner
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
