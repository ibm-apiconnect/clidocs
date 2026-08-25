---
tags:
- "group: draft-apis"
---
# apic draft-apis:publish

Publish a draft API by url reference

## Synopsis

Publish a draft API by url reference

```
apic draft-apis:publish [flags]
```

## Possible Usages

```
apic draft-apis:publish [flags] --stage --scope space DRAFT_API_PUBLISH_FILE
apic draft-apis:publish [flags] --stage DRAFT_API_PUBLISH_FILE
apic draft-apis:publish [flags] --scope space DRAFT_API_PUBLISH_FILE
apic draft-apis:publish [flags] DRAFT_API_PUBLISH_FILE
```

## Options

```
  -c, --catalog string            Catalog name or id (required)
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_services string   The list of gateway service names to support partial publishing
      --migrate_subscriptions     Migrate subscription when republish product
  -o, --org string                Organization name or id (required)
      --output string             Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string             management server endpoint (required)
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
