---
tags:
- "group: gateway-porting-assessments"
---
# apic gateway-porting-assessments:create-project

Create an API Studio project with DataPower Nano Gateway scaffolding

## Synopsis

Create an API Studio project with DataPower Nano Gateway scaffolding

```
apic gateway-porting-assessments:create-project [flags]
```

## Possible Usages

```
apic gateway-porting-assessments:create-project [flags] GATEWAY_PORTING_ASSESSMENT_CREATE_PROJECT_REQUEST_FILE
```

## Request examples

----------------------------------------------------------
#### Example for gateway porting assessment create project
----------------------------------------------------------

```
apis:
- acme-api
- billing-api
description: Project created from Gateway Porting Assessment
gateway_porting_assessment_url: https://acme-apim.example.com/api/orgs/acme-org/gateway-porting-assessments/ta-id
project_name: acme-product-nano-project
project_title: Acme Product Nano Gateway Project
tags:
- porting
- sandbox
- acme-product
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
