---
tags:
- "group: reports"
- "scope: catalog"
---
# apic reports:catalogApiDetail

API detail report

## Synopsis

Return the data needed to populate an API for the leaderboard for the API usage report at catalog scope.

```
apic reports:catalogApiDetail --mode analytics [flags]
```

## Possible Usages

```
apic reports:catalogApiDetail --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --ai_insights                If set to true, enables AI-powered insights and analysis in the report response. This parameter requires the API agent feature to be enabled in the service configuration. When enabled, the report may include additional AI-generated recommendations and patterns.
                                   
      --analytics-service string   Analytics service name or ID. (required)
      --apiref string              API reference (name:version) (required)
      --app_limit string           Limits the number of applications returned in the response. Use this parameter to control pagination and reduce response payload size. Valid range: 1-500. If not specified, a default limit will be applied by the server.
      --app_offset string          If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -c, --catalog string             Catalog name or ID. (required)
      --corg_limit string          Limits the number of consumer organizations returned in the response. Use this parameter to control pagination and reduce response payload size. Valid range: 1-500. If not specified, a default limit will be applied by the server.
      --corg_offset string         If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
      --end string                 If set, only return events with a datetime equal or older than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.
                                   
      --forecast                   If set to true, includes forecasted data projections in the report response based on historical trends. The forecast extends beyond the current date to provide predictive analytics for future API usage patterns. This parameter is useful for trend analysis.
                                   
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --start string               If set, only return events with a date equal to or newer than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.
                                   
      --timeframe string           If set, only return events within the indicated timeframe. Timeframe values are in the format of 'last<value><unit>' where <value> is a positive integer greater than one, and <unit> can be one of day, month, quarter or year.
                                   
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
