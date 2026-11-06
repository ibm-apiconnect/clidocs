---
tags:
- "group: dashboards"
- "scope: org"
---
# apic dashboards:orgBackend

Get the data needed to populate the Backend dashboard at provider organization scope

## Synopsis

Return the data needed to populate the Backend dashboard at provider organization scope.

```
apic dashboards:orgBackend --mode analytics [flags]
```

## Possible Usages

```
apic dashboards:orgBackend --mode analytics [flags]
```

## Options

```
      --accept-language string                 Natural language and locale that the client prefers.
      --ai_insights                            If set to true, enables AI-powered insights and analysis in the dashboard and discover response. This parameter requires the API agent feature to be enabled in the service configuration. When enabled, the report may include additional AI-generated recommendations and patterns.
                                               
      --analytics-service string               Analytics service name or ID. (required)
      --api_id string                          Filter results by API ID.
      --api_name string                        Filter results by API name.
      --api_version string                     Filter results by API version.
      --backend_status_code string             If set, only return events that match this backend response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --backend_time_to_serve_request string   The time in milliseconds to serve the backend request.
      --backend_url string                     Filter results by backend_url.
      --bucket_interval --timeframe            The time interval between data points. For example, if you set --timeframe to 1 day, and you want 24 datapoints on the chart, then set `bucket_interval` to 1h. Format is an integer followed by the units: s|m|h|d (seconds, minutes, hours or days).
                                               
      --catalog_id string                      Filter results by catalog ID.
      --catalog_name string                    Filter results by catalog name.
      --end string                             If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                               
      --error_description string               Filter results by error description.
      --error_message string                   Filter results by error message.
      --format string                          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_name string            Filter results by gateway service name (only included for apigw services).
      --limit string                           If set, the number of items to return when requesting a list. Maximum: 500
      --offset string                          If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -o, --org string                             Provider organization name or ID. (required)
      --output string                          Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string                          management server endpoint (required)
      --space_id string                        Filter results by space ID.
      --space_name string                      Filter results by space name.
      --start string                           If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                               
      --status_code string                     If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --timeframe string                       If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.
                                               
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
