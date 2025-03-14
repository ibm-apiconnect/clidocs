---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:catNodes

Information about a cluster's nodes

## Synopsis

Returns information about a cluster's nodes.

```
apic clustermgmt:catNodes --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:catNodes --mode analytics [flags]
```

## Options

```
      --accept-language string      Natural language and locale that the client prefers.
      --analytics-service string    Analytics service name or ID. (required)
      --bytes string                Unit used to display byte values.
      --format string               Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --full_id                     If true, return the full node ID. If false, return the shortened node ID.
      --h string                    Comma-separated list of column names to display.
      --help                        If true, the response includes help information.
      --include_unloaded_segments   If true, the response includes information from segments that are not loaded into memory.
      --master_timeout string       Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string               Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                      Prettify response
      --return_format string        Short version of the HTTP accept header. Valid values include JSON, YAML, etc.
      --s string                    Comma-separated list of column names or column aliases used to sort the response.
  -s, --server string               management server endpoint (required)
      --time string                 Unit used to display time values.
      --v_columns                   If true, the response includes column headings.
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
