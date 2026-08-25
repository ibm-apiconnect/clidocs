---
tags:
- "group: configured-jwt-providers"
- "scope: catalog"
- "scope: space"
---
# apic configured-jwt-providers:create

Configured Jwt Providers create operations

## Synopsis

Configured Jwt Providers create operations

```
apic configured-jwt-providers:create [flags]
```

## Possible Usages

```
apic configured-jwt-providers:create [flags] --scope space CONFIGURED_JWT_PROVIDER_FILE
apic configured-jwt-providers:create [flags] --scope catalog CONFIGURED_JWT_PROVIDER_FILE
```

## Request examples

---------------------------------------
#### Example for Configure JWT provider
---------------------------------------

```
jwt_provider_url: https://api.acme-apim.example.com/api/orgs/acme-org/jwt-providers/jwt-provider1
```

---------------------------------------
#### Example for Configure JWT provider
---------------------------------------

```
jwt_provider_url: https://api.acme-apim.example.com/api/orgs/acme-org/jwt-providers/jwt-provider1
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for configured-jwt-providers:create
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
