---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:catRecovery

Returns information about ongoing and completed shard recoveries

## Synopsis

Returns information about ongoing and completed shard recoveries, similar to the index recovery API. For data streams, the API returns information about the stream's backing indices.

```
apic clustermgmt:catRecovery --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:catRecovery --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --bytes string               Unit used to display byte values.
      --detailed                   If true, the response includes detailed information about shard recoveries.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --h string                   Comma-separated list of column names to display.
      --help                       If true, the response includes help information.
      --index string               Comma-separated list or wildcard expression of index names used to limit the request.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
      --return_format string       Short version of the HTTP accept header. Valid values include JSON, YAML, etc.
      --s string                   Comma-separated list of column names or column aliases used to sort the response.
  -s, --server string              management server endpoint (required)
      --time string                Unit used to display time values.
      --v_columns                  If true, the response includes column headings.
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
