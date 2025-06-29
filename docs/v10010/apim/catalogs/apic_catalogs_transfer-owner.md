---
tags:
- "group: catalogs"
---
# apic catalogs:transfer-owner

Transfer owner to an associate

## Synopsis

Transfer owner to an associate

```
apic catalogs:transfer-owner [flags]
```

## Possible Usages

```
apic catalogs:transfer-owner [flags] CATALOG TRANSFER_OWNER_FILE
```

## Request examples

---------------------------------------------------
#### Example of owner transfer using associate url.
---------------------------------------------------

```
new_owner_associate_url: https://api.acme-apim.example.com/api/orgs/acme-org/associates/acme-associate
```

------------------------------------------------
#### Example of owner transfer using member url.
------------------------------------------------

```
new_owner_member_url: https://api.acme-apim.example.com/api/catalogs/acme-org/acme-catalog/members/acme-member
```

## Options

```
      --cascade            Cascade the behavior
      --delete_old_owner   Delete old owner
      --format string      Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string         Organization name or id (required)
      --output string      Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string      management server endpoint (required)
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
