---
tags:
- "group: mail-servers"
---
# apic mail-servers:update

Update the Mail Server object by name or id

## Synopsis

Update the Mail Server object by name or id
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic mail-servers:update [flags]
```

## Possible Usages

```
apic mail-servers:update [flags] MAIL_SERVER MAIL_SERVER_FILE
```

## Request examples

-----------------------------------
#### Example of mail server update.
-----------------------------------

```
credentials:
  password: Passw0rd
  username: acmeuser
host: acme.sample.com
port: 25
secure: false
title: acme mailserver update
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