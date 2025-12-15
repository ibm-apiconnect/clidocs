---
tags:
- "group: primary-events"
- "scope: catalog"
- "scope: cloud"
- "scope: configured-gateway-service"
- "scope: configured-portal-service"
- "scope: gateway-service"
- "scope: portal-service"
---
# apic primary-events:list

Primary Events list operations

## Synopsis

Primary Events list operations

```
apic primary-events:list [flags]
```

## Possible Usages

```
apic primary-events:list [flags] --scope portal-service
apic primary-events:list [flags] --scope gateway-service
apic primary-events:list [flags] --scope configured-portal-service
apic primary-events:list [flags] --scope configured-gateway-service
apic primary-events:list [flags] --scope cloud
apic primary-events:list [flags] --scope catalog
```

## Options

```
      --availability-zone string            Availability Zone name or id (required)
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --configured-portal-service string    Configured Portal Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway-service string              Gateway Service name or id (required)
  -h, --help                                Help for primary-events:list
      --limit int32                         Maximum number of items to return
      --offset int32                        Offset item number from list to begin return
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
      --portal-service string               Portal Service name or id (required)
      --scope string                        scope
  -s, --server string                       management server endpoint (required)
      --state string                        State for a webhook event in subscriber queue
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
