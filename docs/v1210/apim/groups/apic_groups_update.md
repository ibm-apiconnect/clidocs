---
tags:
- "group: groups"
- "scope: catalog"
- "scope: cloud"
---
# apic groups:update

Groups update operations

## Synopsis

Groups update operations

```
apic groups:update [flags]
```

## Possible Usages

```
apic groups:update [flags] --space-initiated GROUP GROUP_FILE
apic groups:update [flags] --scope cloud GROUP GROUP_FILE
apic groups:update [flags] --scope catalog GROUP GROUP_FILE
```

## Request examples

--------------------------------------------
#### Example of group update at space scope.
--------------------------------------------

```
org_urls:
- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org1
- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org2
summary: An example group update
title: Acme group update
```

----------------------------------------------
#### Example of group update at catalog scope.
----------------------------------------------

```
org_urls:
- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org1
- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org2
summary: An example group update
title: Acme group update
```

--------------------------------------------
#### Example of group update at cloud scope.
--------------------------------------------

```
org_urls:
- https://api.acme-apim.example.com/api/orgs/org1
- https://api.acme-apim.example.com/api/orgs/org2
summary: An example group update
title: Acme group update
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for groups:update
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --scope string      scope
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
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
