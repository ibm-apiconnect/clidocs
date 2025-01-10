"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[58967],{81801:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"v1009/analytics/dashboards/apic_dashboards_spaceApi","title":"apic dashboards:spaceApi","description":"Get the data needed to populate the API dashboard at space scope","source":"@site/docs/v1009/analytics/dashboards/apic_dashboards_spaceApi.md","sourceDirName":"v1009/analytics/dashboards","slug":"/v1009/analytics/dashboards/apic_dashboards_spaceApi","permalink":"/clidocs/docs/v1009/analytics/dashboards/apic_dashboards_spaceApi","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/analytics/dashboards/apic_dashboards_spaceApi.md","tags":[{"inline":true,"label":"group: dashboards","permalink":"/clidocs/docs/tags/group-dashboards"},{"inline":true,"label":"scope: space","permalink":"/clidocs/docs/tags/scope-space"}],"version":"current","frontMatter":{"tags":["group: dashboards","scope: space"]},"sidebar":"tutorialSidebar","previous":{"title":"apic dashboards:spaceAi","permalink":"/clidocs/docs/v1009/analytics/dashboards/apic_dashboards_spaceAi"},"next":{"title":"apic dashboards:spaceApplication","permalink":"/clidocs/docs/v1009/analytics/dashboards/apic_dashboards_spaceApplication"}}');var n=s(74848),i=s(28453);const a={tags:["group: dashboards","scope: space"]},o="apic dashboards",l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-dashboards",children:["apic dashboards",":spaceApi"]})}),"\n",(0,n.jsx)(t.p,{children:"Get the data needed to populate the API dashboard at space scope"}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"Return the data needed to populate the API dashboard at space scope."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic dashboards:spaceApi --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic dashboards:spaceApi --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"      --accept-language string                   Natural language and locale that the client prefers.\n      --ai_cache_hit string                      Filter results by AI cache hit.\n      --ai_model string                          Filter results by AI model name.\n      --ai_request_tokens string                 Filter results by AI request tokens.\n      --ai_response_tokens string                Filter results by AI response tokens.\n      --ai_total_tokens string                   Filter results by total AI response tokens.\n      --analytics-service string                 Analytics service name or ID. (required)\n      --api_id string                            Filter results by API ID.\n      --api_name string                          Filter results by API name.\n      --api_resource_id string                   Filter results by API resource ID.\n      --api_version string                       Filter results by API version.\n      --app_id string                            Filter results by application ID.\n      --app_lifecycle_state string               Filter results by application lifecycle state.\n      --app_name string                          Filter results by application name.\n      --backend_method string                    Filter results by backend HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.\n      --backend_request_body string              Filter results by backend request body.\n      --backend_response_body string             Filter results by backend response body.\n      --backend_status_code string               If set, only return events that match this backend response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.\n      --backend_time_to_serve_request string     The time in milliseconds to serve the backend request.\n      --backend_url string                       Filter results by backend_url.\n      --bucket_interval --timeframe              The time interval between data points. For example, if you set --timeframe to 1 day, and you want 24 datapoints on the chart, then set `bucket_interval` to 1h. Format is an integer followed by the units: s|m|h|d (seconds, minutes, hours or days).\n                                                 \n      --bytes_received string                    Filter results by the number of bytes received.\n      --bytes_sent string                        Filter results by the number of bytes sent.\n  -c, --catalog string                           Catalog name or ID. (required)\n      --client_id string                         Filter results by client ID.\n      --client_ip not                            Filter results by client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `client_ip=9.123.234.0/24`\n      --consumer_org_id developer_org_id         Filter results by consumer organization ID (filters on the developer_org_id data field).\n      --consumer_org_name developer_org_name     Filter results by consumer organization name (filters on the developer_org_name data field).\n      --consumer_org_title developer_org_title   Filter results by consumer organization title (filters on the developer_org_title data field).\n      --end string                               If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.\n                                                 \n      --endpoint_url string                      Filter results by endpoint_url, note this field is only set on failed API events.\n      --event_id string                          If set, only return this specific event ID.\n      --format string                            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --gateway_ip not                           Filter results by gateway IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `gateway_ip=9.123.234.0/24`\n      --gateway_service_name string              Filter results by gateway service name (only included for apigw services).\n      --gateway_type string                      Filter results by gateway type (not included for v5c services).\n      --global_transaction_id string             Filter results by global transaction ID.\n      --graphql_document_hash string             Filter results by graphql document hash value.\n      --graphql_error_count string               Filter results by graphql error count value.\n      --graphql_operation_name string            Filter results by graphql operation name value.\n      --graphql_operation_type string            Filter results by graphql operation type value.\n      --graphql_request_field_cost string        Filter results by graphql request field cost value.\n      --graphql_request_type_cost string         Filter results by graphql request type cost value.\n      --graphql_response_type_cost string        Filter results by graphql response type cost value.\n      --http_user_agent string                   Filter results by HTTP user agent.\n      --immediate_client_ip not                  Filter results by immediate client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `immediate_client_ip=9.123.234.0/24`\n      --include_others                           If true the dashboard top x charts will include a representation of what share of the whole the top x represents.\n      --log_policy string                        Filter results by log_policy type. Values include: activity, header, payload\n      --method string                            Filter results by HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.\n  -o, --org string                               Provider organization name or ID. (required)\n      --output string                            Write file(s) to directory, instead of STDOUT (default \"-\")\n      --path string                              If set, only return events that contain this path value.\n      --path_id string                           Filter results by path_id\n      --plan_id string                           Filter results by plan ID\n      --plan_name string                         Filter results by plan name\n      --plan_version string                      Filter results by plan version\n      --product_id string                        Filter results by product ID.\n      --product_name string                      Filter results by product name.\n      --product_title string                     Filter results by product title.\n      --product_version string                   Filter results by product version.\n      --query_string string                      Filter results by query_string.\n      --request_body string                      Filter results by request body.\n      --resource_id string                       Filter results by resource ID.\n      --response_body string                     Filter results by response body.\n      --scope string                             Filter results by scope.\n  -s, --server string                            management server endpoint (required)\n      --space string                             Space name or ID. (required)\n      --start string                             If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.\n                                                 \n      --status_code string                       If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.\n      --time_to_serve_request string             The time in milliseconds to serve the request.\n      --timeframe string                         If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.\n                                                 \n      --transaction_id string                    Filter by transaction ID from the gateway.\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);