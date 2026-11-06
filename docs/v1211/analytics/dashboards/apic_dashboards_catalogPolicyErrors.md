---
tags:
- "group: dashboards"
- "scope: catalog"
---
# apic dashboards:catalogPolicyErrors

Get the paginated list of policy error events at catalog scope

## Synopsis

Return the paginated list of policy error events at catalog scope.

```
apic dashboards:catalogPolicyErrors --mode analytics [flags]
```

## Possible Usages

```
apic dashboards:catalogPolicyErrors --mode analytics [flags]
```

## Options

```
      --accept-language string       Natural language and locale that the client prefers.
      --analytics-service string     Analytics service name or ID. (required)
      --api_name string              Filter results by API name.
      --backend_status_code string   If set, only return events that match this backend response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --backend_url string           Filter results by backend_url.
  -c, --catalog string               Catalog name or ID. (required)
      --end string                   If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                     
      --error_description string     Filter results by error description.
      --error_message string         Filter results by error message.
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit string                 If set, the number of items to return when requesting a list. Maximum: 500
      --offset string                If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -o, --org string                   Provider organization name or ID. (required)
      --output string                Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string                management server endpoint (required)
      --space_id string              Filter results by space ID.
      --space_name string            Filter results by space name.
      --start string                 If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                     
      --status_code string           If set, only return events that match this response code e.g. 200 OK, 404 Not Found. It is also possible to use wildcard based values 10x, 20x, 30x, 40x, 50x. The values 'error' and 'success' can also be used to filter for all errors or all successful calls.
      --timeframe string             If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.
                                     
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
