---
tags:
- "group: reports"
- "scope: cloud"
---
# apic reports:cloudConfigSyncDetail

Config sync detail report

## Synopsis

Return the data needed to populate the config sync leaderboard detail report at cloud scope.

```
apic reports:cloudConfigSyncDetail --mode analytics [flags]
```

## Possible Usages

```
apic reports:cloudConfigSyncDetail --mode analytics [flags] CATALOG_NAME
```

## Options

```
      --accept-language string        Natural language and locale that the client prefers.
      --analytics-service string      Analytics service name or ID. (required)
      --end string                    If set, only return events with a datetime equal or older than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.
                                      
      --format string                 Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_name string   Filter results by gateway service name (only included for apigw services).
      --output string                 Write file(s) to directory, instead of STDOUT (default "-")
      --provider_org_name string      Filter results by provider organization name.
  -s, --server string                 management server endpoint (required)
      --start string                  If set, only return events with a date equal to or newer than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.
                                      
      --timeframe string              If set, only return events within the indicated timeframe. Timeframe values are in the format of 'last<value><unit>' where <value> is a positive integer greater than one, and <unit> can be one of day, month, quarter or year.
                                      
      --use_gateway_validation        Indicates whether the request is coming from the wmapigw. This is an internal-use parameter.
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
