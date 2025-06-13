---
tags:
- "group: summary"
- "scope: space"
---
# apic summary:spaceCount

Count API calls for summary events at space scope

## Synopsis

Return the count of total API calls in analytics summary events scoped to the space that match the passed in request query.

```
apic summary:spaceCount --mode analytics [flags]
```

## Possible Usages

```
apic summary:spaceCount --mode analytics [flags]
```

## Options

```
      --accept-language string                 Natural language and locale that the client prefers.
      --analytics-service string               Analytics service name or ID. (required)
      --api_ref string                         Filter results by API reference (name:version)
      --app_name string                        Filter results by application name.
      --bytes_received string                  Filter results by the number of bytes received.
      --bytes_sent string                      Filter results by the number of bytes sent.
  -c, --catalog string                         Catalog name or ID. (required)
      --catalog_name string                    Filter results by catalog name.
      --consumer_org_name developer_org_name   Filter results by consumer organization name (filters on the developer_org_name data field).
      --end string                             If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                               
      --format string                          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_name string            Filter results by gateway service name (only included for apigw services).
      --limit string                           If set, the number of items to return when requesting a list. Maximum: 500
      --offset string                          If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -o, --org string                             Provider organization name or ID. (required)
      --output string                          Write file(s) to directory, instead of STDOUT (default "-")
      --plan_id string                         Filter results by plan ID
      --product_ref string                     Filter results by product reference (name:version)
      --provider_org_name string               Filter results by provider organization name.
  -s, --server string                          management server endpoint (required)
      --space string                           Space name or ID. (required)
      --space_name string                      Filter results by space name.
      --start string                           If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                               
      --status_code string                     If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --summary_event_id string                If set, only return this specific summary event ID.
      --time_to_serve_request string           The time in milliseconds to serve the request.
      --timeframe string                       If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.
                                               
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
