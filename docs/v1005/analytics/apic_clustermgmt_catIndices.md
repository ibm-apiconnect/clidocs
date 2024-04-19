# apic clustermgmt:catIndices

Returns high-level information about indices in a cluster.

## Synopsis

Returns high-level information about indices in a cluster, including backing indices for data streams.

```
apic clustermgmt:catIndices --mode analytics [flags]
```

## Options

```
      --accept-language string      Natural language and locale that the client prefers.
      --analytics-service string    Analytics service name or ID. (required)
      --bytes string                Unit used to display byte values.
      --expand_wildcards string     Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

      --format string               Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --h string                    Comma-separated list of column names to display.
      --health string               Health status used to limit returned indices.
      --help                        If true, the response includes help information.
      --include_unloaded_segments   If true, the response includes information from segments that are not loaded into memory.
      --master_timeout string       Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string               Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                      Prettify response
      --pri                         If true, the response only includes information from primary shards.
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
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
