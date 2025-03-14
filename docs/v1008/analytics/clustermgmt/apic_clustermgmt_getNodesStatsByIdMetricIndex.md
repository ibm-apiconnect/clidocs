---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getNodesStatsByIdMetricIndex

Result of _nodes/:nodeId

## Synopsis

Returns the result of nodes/:nodeId on OpenSearch

```
apic clustermgmt:getNodesStatsByIdMetricIndex --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:getNodesStatsByIdMetricIndex --mode analytics [flags] ID
```

## Options

```
      --accept-language string       Natural language and locale that the client prefers.
      --analytics-service string     Analytics service name or ID. (required)
      --completion_fields string     Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics.
      --fielddata_fields string      Comma-separated list or wildcard expressions of fields to include in fielddata statistics.
      --fields string                Comma-separated list or wildcard expressions of fields to include in the statistics.
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --groups string                Comma-separated list of search groups to include in the search statistics.
      --include_segment_file_sizes   If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested). Defaults to false.
      --include_unloaded_segments    If true, the response includes information from segments that are not loaded into memory.
      --index-metric string          Limit the information returned for indices metric to the specific index metrics. (required)
      --level string                 Indicates whether statistics are aggregated at the cluster, index, or shard level.
      --master_timeout string        Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --metric string                Limits the information returned to the specific metrics. Supports a comma-separated list, such as http,ingest. (required)
      --output string                Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                       Prettify response
  -s, --server string                management server endpoint (required)
      --timeout string               Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
      --types string                 A comma-separated list of document types for the indexing index metric.
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
