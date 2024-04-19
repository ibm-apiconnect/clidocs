# apic clustermgmt:getAllocationExplain

Result of _cluster/allocation/explain

## Synopsis

The purpose of the cluster allocation explain API is to provide explanations for shard allocations in the cluster. For unassigned shards, the explain API provides an explanation for why the shard is unassigned.  For assigned shards, the explain API provides an explanation for why the shard is remaining on its current node and has not moved or rebalanced to another node.

```
apic clustermgmt:getAllocationExplain --mode analytics [flags]
```

## Options

```
      --accept-language string       Natural language and locale that the client prefers.
      --analytics-service string     Analytics service name or ID. (required)
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                         Help for clustermgmt:getAllocationExplain
      --include_disk_info_optional   If true, returns information about disk usage and shard sizes. Defaults to false.
      --include_yes_decisions        If true, returns YES decisions in explanation. Defaults to false.
      --output string                Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                       Prettify response
  -s, --server string                management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
