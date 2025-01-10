"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[81829],{24943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"v1005/analytics/apic_events_orgScroll","title":"apic events:orgScroll","description":"Scroll through results in batches.","source":"@site/docs/v1005/analytics/apic_events_orgScroll.md","sourceDirName":"v1005/analytics","slug":"/v1005/analytics/apic_events_orgScroll","permalink":"/clidocs/docs/v1005/analytics/apic_events_orgScroll","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_events_orgScroll.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apic events:orgList","permalink":"/clidocs/docs/v1005/analytics/apic_events_orgList"},"next":{"title":"apic events:orgScrollDelete","permalink":"/clidocs/docs/v1005/analytics/apic_events_orgScrollDelete"}}');var s=r(74848),i=r(28453);const o={},l="apic events",a={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"apic-events",children:["apic events",":orgScroll"]})}),"\n",(0,s.jsx)(t.p,{children:"Scroll through results in batches."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.p,{children:"Returns an initial batch of results following the requested size or a default of 1000 as well as a 'scroll_id'. Pass this scroll ID to the next scroll operation to get back the next batch of results. Typically, the scroll ID does not change between requests, but it can change, so make sure to always use the latest scroll ID."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"apic events:orgScroll --mode analytics [flags]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --accept-language string                   Natural language and locale that the client prefers.\n      --analytics-service string                 Analytics service name or ID. (required)\n      --api_id string                            Filter results by API ID.\n      --api_name string                          Filter results by API name.\n      --api_resource_id string                   Filter results by API resource ID.\n      --api_version string                       Filter results by API version.\n      --app_id string                            Filter results by application ID.\n      --app_lifecycle_state string               Filter results by application lifecycle state.\n      --app_name string                          Filter results by application name.\n      --bytes_received string                    Filter results by the number of bytes received.\n      --bytes_sent string                        Filter results by the number of bytes sent.\n      --catalog_id string                        Filter results by catalog ID.\n      --catalog_name string                      Filter results by catalog name.\n      --client_id string                         Filter results by client ID.\n      --client_ip not                            Filter results by client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `client_ip=9.123.234.0/24`\n      --consumer_org_id developer_org_id         Filter results by consumer organization ID (filters on the developer_org_id data field).\n      --consumer_org_name developer_org_name     Filter results by consumer organization name (filters on the developer_org_name data field).\n      --consumer_org_title developer_org_title   Filter results by consumer organization title (filters on the developer_org_title data field).\n      --end string                               If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.\n\n      --endpoint_url string                      Filter results by endpoint_url, note this field is only set on failed API events.\n      --event_id string                          If set, only return this specific event ID.\n      --fields string                            A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.\n\n      --format string                            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --gateway_ip not                           Filter results by gateway IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `gateway_ip=9.123.234.0/24`\n      --gateway_service_name string              Filter results by gateway service name (only included for apigw services).\n      --global_transaction_id string             Filter results by global transaction ID.\n      --graphql_error_count string               Filter results by graphql error count value.\n      --graphql_operation_name string            Filter results by graphql operation name value.\n      --graphql_operation_type string            Filter results by graphql operation type value.\n      --graphql_request_field_cost string        Filter results by graphql request field cost value.\n      --graphql_request_type_cost string         Filter results by graphql request type cost value.\n      --graphql_response_type_cost string        Filter results by graphql response type cost value.\n  -h, --help                                     Help for events:orgScroll\n      --http_user_agent string                   Filter results by HTTP user agent.\n      --immediate_client_ip not                  Filter results by immediate client IP address. Only supports equality checks and not but no other operator prefixes. Supports CIDR notation based queries, e.g. `immediate_client_ip=9.123.234.0/24`\n      --method string                            Filter results by HTTP method e.g. GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS.\n  -o, --org string                               Provider organization name or ID. (required)\n      --output string                            Write file(s) to directory, instead of STDOUT (default "-")\n      --path string                              If set, only return events that contain this path value.\n      --path_id string                           Filter results by path_id\n      --plan_id string                           Filter results by plan ID\n      --plan_name string                         Filter results by plan name\n      --plan_version string                      Filter results by plan version\n      --product_id string                        Filter results by product ID.\n      --product_name string                      Filter results by product name.\n      --product_title string                     Filter results by product title.\n      --product_version string                   Filter results by product version.\n      --query_string string                      Filter results by query_string.\n      --request_body string                      Filter results by request body.\n      --resource_id string                       Filter results by resource ID.\n      --response_body string                     Filter results by response body.\n  -s, --server string                            management server endpoint (required)\n      --space_id string                          Filter results by space ID.\n      --space_name string                        Filter results by space name.\n      --start string                             If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.\n\n      --status_code string                       If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x.\n      --time_to_serve_request string             The time in milliseconds to serve the request.\n      --timeframe string                         If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.\n\n      --transaction_id string                    Filter by transaction ID from the gateway.\n'})}),"\n",(0,s.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);