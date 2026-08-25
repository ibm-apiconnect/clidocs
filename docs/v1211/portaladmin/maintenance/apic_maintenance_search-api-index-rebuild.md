---
tags:
- "group: maintenance"
---
# apic maintenance:search-api-index-rebuild

Rebuilds and reindexes the search API index for a Developer Portal.

## Synopsis

Rebuilds and reindexes the search API index for a Developer Portal. NOTE: this command triggers the reindex in the background, and reindexing can take a long time. You can track the index status with maintenance:search-api-index-status

```
apic maintenance:search-api-index-rebuild --mode portaladmin [flags]
```

## Possible Usages

```
apic maintenance:search-api-index-rebuild --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string    management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```
