---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:update

Products update operations

## Synopsis

Products update operations

```
apic products:update [flags]
```

## Possible Usages

```
apic products:update [flags] --id --scope space ID PRODUCT_FILE
apic products:update [flags] --id --scope catalog ID PRODUCT_FILE
apic products:update [flags] --scope space NAME:VERSION PRODUCT_FILE
apic products:update [flags] --scope catalog NAME:VERSION PRODUCT_FILE
```

## Request examples

--------------------------------------------------------------------
#### Example of product update by name and version at catalog scope.
--------------------------------------------------------------------

```
visibility:
  subscribe:
    enabled: true
    group_urls: []
    org_urls:
    - https://api.acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org
    type: custom
  view:
    enabled: true
    group_urls: []
    org_urls: []
    type: authenticated
```

------------------------------------------------------
#### Example of product update by id at catalog scope.
------------------------------------------------------

```
visibility:
  subscribe:
    enabled: true
    group_urls: []
    org_urls:
    - https://api.acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org
    type: custom
  view:
    enabled: true
    group_urls: []
    org_urls: []
    type: authenticated
```

------------------------------------------------------------------
#### Example of product update by name and version at space scope.
------------------------------------------------------------------

```
visibility:
  subscribe:
    enabled: true
    group_urls: []
    org_urls:
    - https://api.acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-space/acme-consumer-org
    type: custom
  view:
    enabled: true
    group_urls: []
    org_urls: []
    type: authenticated
```

----------------------------------------------------
#### Example of product update by id at space scope.
----------------------------------------------------

```
visibility:
  subscribe:
    enabled: true
    group_urls: []
    org_urls:
    - https://api.acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-space/acme-consumer-org
    type: custom
  view:
    enabled: true
    group_urls: []
    org_urls: []
    type: authenticated
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:update
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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
