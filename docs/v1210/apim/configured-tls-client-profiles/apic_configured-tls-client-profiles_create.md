---
tags:
- "group: configured-tls-client-profiles"
- "scope: catalog"
- "scope: space"
---
# apic configured-tls-client-profiles:create

Configured Tls Client Profiles create operations

## Synopsis

Configured Tls Client Profiles create operations

```
apic configured-tls-client-profiles:create [flags]
```

## Possible Usages

```
apic configured-tls-client-profiles:create [flags] --scope space CONFIGURED_TLS_CLIENT_PROFILE_FILE
apic configured-tls-client-profiles:create [flags] --scope catalog CONFIGURED_TLS_CLIENT_PROFILE_FILE
```

## Request examples

----------------------------------------------------------------------
#### Example configured catalog user registry create at catalog scope.
----------------------------------------------------------------------

```
tls_client_profile_url: https://api.acme-apim.example.com/api/orgs/acme-org/tls-client-profiles/acme-tls-client-profile
```

--------------------------------------------------------------------
#### Example configured catalog user registry create at space scope.
--------------------------------------------------------------------

```
tls_client_profile_url: https://api.acme-apim.example.com/api/orgs/acme-org/tls-client-profiles/acme-tls-client-profile
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for configured-tls-client-profiles:create
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
