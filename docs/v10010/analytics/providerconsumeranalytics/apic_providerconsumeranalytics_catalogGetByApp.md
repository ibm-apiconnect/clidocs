---
tags:
- "group: providerconsumeranalytics"
- "scope: catalog"
---
# apic providerconsumeranalytics:catalogGetByApp

Get data to populate the consumer analytics dashboard by app id.

## Synopsis

Get data to populate the consumer analytics dashboard for a specific application ID. This endpoint requires provider level authentication.

```
apic providerconsumeranalytics:catalogGetByApp --mode analytics [flags]
```

## Possible Usages

```
apic providerconsumeranalytics:catalogGetByApp --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --api_name string            Filter results by API name.
      --api_version string         Filter results by API version.
  -c, --catalog string             Catalog name or ID. (required)
      --end string                 If set, only return events with a datetime equal or older than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                   
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit string               If set, the number of items to return when requesting a list. Maximum: 500
      --offset string              If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --plan_name string           Filter results by plan name
      --product_name string        Filter results by product name.
      --product_version string     Filter results by product version.
  -s, --server string              management server endpoint (required)
      --start string               If set, only return events with a datetime equal to or newer than this. The value must follow the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z. See https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
                                   
      --timeframe string           If set, only return events within the indicated timeframe. This parameter will be ignored if either start or end have been specified.
                                   
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
