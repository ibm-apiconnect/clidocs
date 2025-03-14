---
tags:
- "group: catalogs"
---
# apic catalogs:email-to-owners

Send email to owners of consumer organizations

## Synopsis

Send email to owners of consumer organizations, given consumer org and consumer group urls. For consumer group, email owners of all consumer orgs in the group.

```
apic catalogs:email-to-owners [flags]
```

## Possible Usages

```
apic catalogs:email-to-owners [flags] CATALOG EMAIL_TO_OWNERS_FILE
```

## Request examples

--------------------------------
#### Example of email to owners.
--------------------------------

```
body: This is an example email to owners
consumer_org_urls:
- https://api.acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org1
- 'https://api.acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org2  '
content_type: text
subject: An email to owners
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
