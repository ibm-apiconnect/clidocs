# apic events:orgList

List events at provider organization scope.

## Synopsis

Return a result set of analytics API events scoped to the provider organization. The items in the result set are determined by the passed in request query to this API. The order of the result set is sorted from newest to oldest events by specified 'datetime'. In this API, references to 'field' refer to the analytics API event fields documented here: https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=data-api-event-record-fields Note this operation is limited to only being able to return 10,000 events, if you need more than that then use the scroll operation.

```
apic events:orgList --mode analytics [flags]
```

## Options

```
      --accept-language string                   Natural language and locale that the client prefers.
      --analytics-service string                 Analytics service name or ID. (required)
      --api_id string                            Filter results by API ID.
      --api_name string                          Filter results by API name.
      --api_resource_id string                   Filter results by API resource ID.
      --api_version string                       Filter results by API version.
      --app_id string                            Filter results by application ID.
      --app_lifecycle_state string               Filter results by application lifecycle state.
      --app_name string                          Filter results by application name.
      --bytes_received string                    Filter results by the number of bytes received.
      --bytes_sent string                        Filter results by the number of bytes sent.
      --catalog_id string                        Filter results by catalog ID.
      --catalog_name string                      Filter results by catalog name.
      --client_id string                         Filter results by client ID.
      --client_ip not                            Filter results by client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `client_ip=9.123.234.0/24`
      --consumer_org_id developer_org_id         Filter results by consumer organization ID (filters on the developer_org_id data field).
      --consumer_org_name developer_org_name     Filter results by consumer organization name (filters on the developer_org_name data field).
      --consumer_org_title developer_org_title   Filter results by consumer organization title (filters on the developer_org_title data field).
      --end string                               If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.

      --endpoint_url string                      Filter results by endpoint_url, note this field is only set on failed API events.
      --event_id string                          If set, only return this specific event ID.
      --fields string                            A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.

      --format string                            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_ip not                           Filter results by gateway IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `gateway_ip=9.123.234.0/24`
      --gateway_service_name string              Filter results by gateway service name (only included for apigw services).
      --global_transaction_id string             Filter results by global transaction ID.
      --graphql_error_count string               Filter results by graphql error count value.
      --graphql_operation_name string            Filter results by graphql operation name value.
      --graphql_operation_type string            Filter results by graphql operation type value.
      --graphql_request_field_cost string        Filter results by graphql request field cost value.
      --graphql_request_type_cost string         Filter results by graphql request type cost value.
      --graphql_response_type_cost string        Filter results by graphql response type cost value.
  -h, --help                                     Help for events:orgList
      --http_user_agent string                   Filter results by HTTP user agent.
      --immediate_client_ip not                  Filter results by immediate client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `immediate_client_ip=9.123.234.0/24`
      --limit string                             If set, the number of items to return when requesting a list. Maximum: 500
      --method string                            Filter results by HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.
      --offset string                            If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -o, --org string                               Provider organization name or ID. (required)
      --output string                            Write file(s) to directory, instead of STDOUT (default "-")
      --path string                              If set, only return events that contain this path value.
      --path_id string                           Filter results by path_id
      --plan_id string                           Filter results by plan ID
      --plan_name string                         Filter results by plan name
      --plan_version string                      Filter results by plan version
      --product_id string                        Filter results by product ID.
      --product_name string                      Filter results by product name.
      --product_title string                     Filter results by product title.
      --product_version string                   Filter results by product version.
      --query_string string                      Filter results by query_string.
      --request_body string                      Filter results by request body.
      --resource_id string                       Filter results by resource ID.
      --response_body string                     Filter results by response body.
  -s, --server string                            management server endpoint (required)
      --space_id string                          Filter results by space ID.
      --space_name string                        Filter results by space name.
      --start string                             If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.

      --status_code string                       If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x.
      --time_to_serve_request string             The time in milliseconds to serve the request.
      --timeframe string                         If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.

      --transaction_id string                    Filter by transaction ID from the gateway.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
