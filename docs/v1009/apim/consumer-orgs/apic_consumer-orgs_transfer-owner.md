---
tags:
- "group: consumer-orgs"
---
# apic consumer-orgs:transfer-owner

Transfer owner to an associate

## Synopsis

Transfer owner to an associate

```
apic consumer-orgs:transfer-owner [flags]
```

## Possible Usages

```
apic consumer-orgs:transfer-owner [flags] --space-initiated CONSUMER_ORG TRANSFER_OWNER_FILE
apic consumer-orgs:transfer-owner [flags] CONSUMER_ORG TRANSFER_OWNER_FILE
```

## Options

```
      --cascade            Cascade the behavior
  -c, --catalog string     Catalog name or id (required)
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
