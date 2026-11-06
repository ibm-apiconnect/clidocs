---
tags:
- "group: gateway-porting-assessments"
---
# apic gateway-porting-assessments:calculate-compatibility

Calculate porting compatibility for DataPower Nano Gateway

## Synopsis

Calculate porting compatibility for DataPower Nano Gateway

```
apic gateway-porting-assessments:calculate-compatibility [flags]
```

## Possible Usages

```
apic gateway-porting-assessments:calculate-compatibility [flags] GATEWAY_PORTING_ASSESSMENT_ACTION_REQUEST_FILE
```

## Request examples

----------------------------------------------------------------------------------------
#### Example for gateway porting assessment calculate compatibility using product object
----------------------------------------------------------------------------------------

```
catalog: sandbox
product:
  name: acme-product
  version: 1.0.0
```

-------------------------------------------------------------------------------------
#### Example for gateway porting assessment calculate compatibility using product URL
-------------------------------------------------------------------------------------

```
catalog: sandbox
product_url: https://acme-apim.example.com/api/catalogs/acme-org/sandbox/products/product-id
```

-------------------------------------------------------------------------------------------------------
#### Example for gateway porting assessment calculate compatibility at space scope using product object
-------------------------------------------------------------------------------------------------------

```
catalog: sandbox
product:
  name: acme-product
  version: 1.0.0
scope: space
space: development
```

----------------------------------------------------------------------------------------------------
#### Example for gateway porting assessment calculate compatibility at space scope using product URL
----------------------------------------------------------------------------------------------------

```
catalog: sandbox
product_url: https://acme-apim.example.com/api/spaces/acme-org/sandbox/development/products/product-id
scope: space
space: development
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
