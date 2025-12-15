---
tags:
- "group: audit"
- "scope: cloud"
---
# apic audit:cloudTimeline

List audits for timeline chart

## Synopsis

Returns a list of audit events sorted by eventTime, scoped to cloud.

```
apic audit:cloudTimeline --mode analytics [flags]
```

## Possible Usages

```
apic audit:cloudTimeline --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --action string              Filter result by audit action name
      --analytics-service string   Analytics service name or ID. (required)
      --catalogId string           Filter results by for audit catalog ID.
      --end string                 If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                   
      --eventGenerator string      filter result by where event was generated
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --id string                  Filter result by audit event id
      --limit string               If set, the number of items to return when requesting a list. Maximum: 500
      --logSourceCRN string        Filter result by log source CRN
      --logSourceType string       Filter result by log source type
      --offset string              If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
      --orgId string               Filter results by provider organization ID.
      --outcome string             Filter result by audit outcome
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --requestPath string         Filter audit result by request path
  -s, --server string              management server endpoint (required)
      --sort string                Specifies the field name to use to sort the results. By default, the sorting is in ascending order. To sort in descending order, prefix the field name with a -
      --spaceId string             Filter result by space Id
      --start string               If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                   
      --tags string                Filter result by audit tags
      --timeframe string           If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.
                                   
      --typeURI string             Filter result by audit typeURI
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
