# apic clustermgmt:postReroute

Changes the allocation of shards in a cluster.

## Synopsis

The reroute command allows for manual changes to the allocation of individual shards in the cluster. For example, a shard can be moved from one node to another explicitly, an allocation can be cancelled, and an unassigned shard can be explicitly allocated to a specific node.

```
apic clustermgmt:postReroute --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --dry_run                    If true, then the request simulates the operation only and returns the resulting state.
      --explain                    If true, then the response contains an explanation of why the commands can or cannot be executed.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                       Help for clustermgmt:postReroute
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --metric string              Limits the information returned to the specified metrics. Defaults to all but metadata.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
      --retry_failed               If true, then it retries allocation of shards that are blocked due to too many subsequent allocation failures.
  -s, --server string              management server endpoint (required)
      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
