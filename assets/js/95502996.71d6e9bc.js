"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[90804],{18988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"v1005/analytics/apic_dashboards_catalogProduct","title":"apic dashboards:catalogProduct","description":"Get the data needed to populate the Product dashboard at catalog scope.","source":"@site/docs/v1005/analytics/apic_dashboards_catalogProduct.md","sourceDirName":"v1005/analytics","slug":"/v1005/analytics/apic_dashboards_catalogProduct","permalink":"/clidocs/docs/v1005/analytics/apic_dashboards_catalogProduct","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_dashboards_catalogProduct.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apic dashboards:catalogLatency","permalink":"/clidocs/docs/v1005/analytics/apic_dashboards_catalogLatency"},"next":{"title":"apic dashboards:catalogStatus","permalink":"/clidocs/docs/v1005/analytics/apic_dashboards_catalogStatus"}}');var n=r(74848),i=r(28453);const a={},o="apic dashboards",l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-dashboards",children:["apic dashboards",":catalogProduct"]})}),"\n",(0,n.jsx)(t.p,{children:"Get the data needed to populate the Product dashboard at catalog scope."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"Return the data needed to populate the Product dashboard at catalog scope."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic dashboards:catalogProduct --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-language string                   Natural language and locale that the client prefers.\n      --analytics-service string                 Analytics service name or ID. (required)\n      --api_id string                            Filter results by API ID.\n      --api_name string                          Filter results by API name.\n      --api_resource_id string                   Filter results by API resource ID.\n      --api_version string                       Filter results by API version.\n      --app_id string                            Filter results by application ID.\n      --app_lifecycle_state string               Filter results by application lifecycle state.\n      --app_name string                          Filter results by application name.\n      --bytes_received string                    Filter results by the number of bytes received.\n      --bytes_sent string                        Filter results by the number of bytes sent.\n  -c, --catalog string                           Catalog name or ID. (required)\n      --client_id string                         Filter results by client ID.\n      --client_ip not                            Filter results by client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `client_ip=9.123.234.0/24`\n      --consumer_org_id developer_org_id         Filter results by consumer organization ID (filters on the developer_org_id data field).\n      --consumer_org_name developer_org_name     Filter results by consumer organization name (filters on the developer_org_name data field).\n      --consumer_org_title developer_org_title   Filter results by consumer organization title (filters on the developer_org_title data field).\n      --end string                               If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.\n\n      --endpoint_url string                      Filter results by endpoint_url, note this field is only set on failed API events.\n      --event_id string                          If set, only return this specific event ID.\n      --format string                            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --gateway_ip not                           Filter results by gateway IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `gateway_ip=9.123.234.0/24`\n      --gateway_service_name string              Filter results by gateway service name (only included for apigw services).\n      --global_transaction_id string             Filter results by global transaction ID.\n      --graphql_error_count string               Filter results by graphql error count value.\n      --graphql_operation_name string            Filter results by graphql operation name value.\n      --graphql_operation_type string            Filter results by graphql operation type value.\n      --graphql_request_field_cost string        Filter results by graphql request field cost value.\n      --graphql_request_type_cost string         Filter results by graphql request type cost value.\n      --graphql_response_type_cost string        Filter results by graphql response type cost value.\n  -h, --help                                     Help for dashboards:catalogProduct\n      --http_user_agent string                   Filter results by HTTP user agent.\n      --immediate_client_ip not                  Filter results by immediate client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `immediate_client_ip=9.123.234.0/24`\n      --limit string                             If set, the number of items to return when requesting a list. Maximum: 500\n      --method string                            Filter results by HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.\n      --offset string                            If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result\n  -o, --org string                               Provider organization name or ID. (required)\n      --output string                            Write file(s) to directory, instead of STDOUT (default "-")\n      --path string                              If set, only return events that contain this path value.\n      --path_id string                           Filter results by path_id\n      --plan_id string                           Filter results by plan ID\n      --plan_name string                         Filter results by plan name\n      --plan_version string                      Filter results by plan version\n      --product_id string                        Filter results by product ID.\n      --product_name string                      Filter results by product name.\n      --product_title string                     Filter results by product title.\n      --product_version string                   Filter results by product version.\n      --query_string string                      Filter results by query_string.\n      --request_body string                      Filter results by request body.\n      --resource_id string                       Filter results by resource ID.\n      --response_body string                     Filter results by response body.\n  -s, --server string                            management server endpoint (required)\n      --space_id string                          Filter results by space ID.\n      --space_name string                        Filter results by space name.\n      --start string                             If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.\n\n      --status_code string                       If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x.\n      --time_to_serve_request string             The time in milliseconds to serve the request.\n      --timeframe string                         If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.\n\n      --transaction_id string                    Filter by transaction ID from the gateway.\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);