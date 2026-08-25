---
tags:
- "group: reports"
- "scope: catalog"
---
# apic reports:catalogUsageEvolution

Usage Evolution report

## Synopsis

Return the data needed to populate the Usage Evolution report at catalog scope.

```
apic reports:catalogUsageEvolution --mode analytics [flags]
```

## Possible Usages

```
apic reports:catalogUsageEvolution --mode analytics [flags]
```

## Options

```
      --accept-language string               Natural language and locale that the client prefers.
      --ai_insights                          If set to true, enables AI-powered insights and analysis in the report response. This parameter requires the API agent feature to be enabled in the service configuration. When enabled, the report may include additional AI-generated recommendations and patterns.
                                             
      --analytics-service string             Analytics service name or ID. (required)
  -c, --catalog string                       Catalog name or ID. (required)
      --format string                        Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_name string          Filter results by gateway service name (only included for apigw services).
  -o, --org string                           Provider organization name or ID. (required)
      --output string                        Write file(s) to directory, instead of STDOUT (default "-")
      --provider_org_name string             Filter results by provider organization name.
  -s, --server string                        management server endpoint (required)
      --usage-evolution-report-type string   Type of entity for usage evolution report (required)
      --use_gateway_validation               Indicates whether the request is coming from the wmapigw. This is an internal-use parameter.
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
