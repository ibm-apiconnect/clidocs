---
tags:
- "group: dashboards"
- "scope: org"
---
# apic dashboards:orgStatus

Get the data needed to populate the Status dashboard at provider organization scope

## Synopsis

Return the data needed to populate the Status dashboard at provider organization scope.

```
apic dashboards:orgStatus --mode analytics [flags]
```

## Possible Usages

```
apic dashboards:orgStatus --mode analytics [flags]
```

## Options

```
      --accept-language string                   Natural language and locale that the client prefers.
      --ai_cache_hit string                      Filter results by AI LLM cache hit.
      --ai_insights                              If set to true, enables AI-powered insights and analysis in the dashboard and discover response. This parameter requires the API agent feature to be enabled in the service configuration. When enabled, the report may include additional AI-generated recommendations and patterns.
                                                 
      --ai_model string                          Filter results by AI LLM model name.
      --ai_request_tokens string                 Filter results by AI LLM request tokens.
      --ai_response_tokens string                Filter results by AI LLM response tokens.
      --ai_total_tokens string                   Filter results by total AI LLM response tokens.
      --alert_action string                      Filter results by alert action.
      --alert_description string                 Filter results by alert description.
      --alert_source string                      Filter results by alert source
      --alert_type string                        Filter results by alert type.
      --analytics-service string                 Analytics service name or ID. (required)
      --api_id string                            Filter results by API ID.
      --api_name string                          Filter results by API name.
      --api_resource_id string                   Filter results by API resource ID.
      --api_type string                          Filter results by API type.
      --api_version string                       Filter results by API version.
      --app_id string                            Filter results by application ID.
      --app_lifecycle_state string               Filter results by application lifecycle state.
      --app_name string                          Filter results by application name.
      --backend_method string                    Filter results by backend HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.
      --backend_request_body string              Filter results by backend request body.
      --backend_response_body string             Filter results by backend response body.
      --backend_status_code string               If set, only return events that match this backend response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --backend_time_to_serve_request string     The time in milliseconds to serve the backend request.
      --backend_url string                       Filter results by backend_url.
      --bucket_interval --timeframe              The time interval between data points. For example, if you set --timeframe to 1 day, and you want 24 datapoints on the chart, then set `bucket_interval` to 1h. Format is an integer followed by the units: s|m|h|d (seconds, minutes, hours or days).
                                                 
      --bytes_received string                    Filter results by the number of bytes received.
      --bytes_sent string                        Filter results by the number of bytes sent.
      --cached_response string                   Filter results by cached response.
      --callback_request string                  Filter results by callback request.
      --catalog_id string                        Filter results by catalog ID.
      --catalog_name string                      Filter results by catalog name.
      --client_id string                         Filter results by client ID.
      --client_ip not                            Filter results by client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `client_ip=9.123.234.0/24`
      --consumer_org_id developer_org_id         Filter results by consumer organization ID (filters on the developer_org_id data field).
      --consumer_org_name developer_org_name     Filter results by consumer organization name (filters on the developer_org_name data field).
      --consumer_org_title developer_org_title   Filter results by consumer organization title (filters on the developer_org_title data field).
      --document_size string                     Filter results by the document size.
      --end string                               If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                                 
      --endpoint_url string                      Filter results by endpoint_url, note this field is only set on failed API events.
      --error_description string                 Filter results by error description.
      --error_message string                     Filter results by error message.
      --event_id string                          If set, only return this specific event ID.
      --event_type string                        Filter results by event type.
      --filter_name string                       Filter results by filter name.
      --format string                            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_host string                      Filter results by gateway host
      --gateway_ip not                           Filter results by gateway IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `gateway_ip=9.123.234.0/24`
      --gateway_port string                      Filter results by gateway port
      --gateway_service_name string              Filter results by gateway service name (only included for apigw services).
      --gateway_time_to_serve_request string     The time in milliseconds to handle the request in the gateway (not including any time for backend requests).
      --gateway_type string                      Filter results by gateway type (not included for v5c services).
      --global_transaction_id string             Filter results by global transaction ID.
      --graphql_document_hash string             Filter results by graphql document hash value.
      --graphql_error_count string               Filter results by graphql error count value.
      --graphql_operation_name string            Filter results by graphql operation name value.
      --graphql_operation_type string            Filter results by graphql operation type value.
      --graphql_request_field_cost string        Filter results by graphql request field cost value.
      --graphql_request_type_cost string         Filter results by graphql request type cost value.
      --graphql_response_type_cost string        Filter results by graphql response type cost value.
      --http_user_agent string                   Filter results by HTTP user agent.
      --immediate_client_ip not                  Filter results by immediate client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `immediate_client_ip=9.123.234.0/24`
      --include_others                           If true the dashboard top x charts will include a representation of what share of the whole the top x represents.
      --jsonrpc_request_id string                Filter results by JSON-RPC request ID.
      --log_policy string                        Filter results by log_policy type. Values include: activity, header, payload
      --mcp_method_name string                   Filter results by MCP method name.
      --mcp_operation_name string                Filter results by MCP operation name.
      --mcp_prompt_name string                   Filter results by MCP prompt name.
      --mcp_resource_uri string                  Filter results by MCP resource URI.
      --mcp_server_id string                     Filter results by MCP server ID.
      --mcp_server_name string                   Filter results by MCP server name.
      --mcp_server_title string                  Filter results by MCP server title.
      --mcp_server_version string                Filter results by MCP server version.
      --mcp_session_id string                    Filter results by MCP session ID.
      --mcp_tool_call_arguments string           Filter results by MCP tool call arguments.
      --mcp_tool_call_result string              Filter results by MCP tool call result.
      --mcp_tool_name string                     Filter results by MCP tool name.
      --method string                            Filter results by HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.
      --monitor_attribute string                 Filter results by monitor attribute.
      --operation_path string                    Filter results by operation path.
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
      --protocol_version string                  Filter results by protocol version.
      --query_string string                      Filter results by query_string.
      --request_body string                      Filter results by request body.
      --resource_id string                       Filter results by resource ID.
      --response_body string                     Filter results by response body.
      --rpc_status_code string                   Filter results by RPC status code.
      --rule_name string                         Filter results by rule_name.
      --scope string                             Filter results by scope.
  -s, --server string                            management server endpoint (required)
      --space_id string                          Filter results by space ID.
      --space_name string                        Filter results by space name.
      --start string                             If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                                 
      --status_code string                       If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --time_to_serve_request string             The time in milliseconds to serve the request.
      --timeframe string                         If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.
                                                 
      --transaction_id string                    Filter by transaction ID from the gateway.
      --websocket_message_type string            Filter results by websocket message type
      --websocket_origin string                  Filter results by websocket origin
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
