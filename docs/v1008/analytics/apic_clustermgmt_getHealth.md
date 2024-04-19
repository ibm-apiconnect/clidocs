# apic clustermgmt:getHealth

Returns the health status of a cluster

## Synopsis

The cluster health API returns a simple status on the health of the cluster. You can also use the API to get the health status of only specified data streams and indices. For data streams, the API retrieves the health status of the stream's backing indices.

```
apic clustermgmt:getHealth --mode analytics [flags]
```

## Possible Usages

```
      apic clustermgmt:getHealth --mode analytics [flags]
```

## Options

```
      --accept-language string            Natural language and locale that the client prefers.
      --analytics-service string          Analytics service name or ID. (required)
      --format string                     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --level string                      Indicates whether statistics are aggregated at the cluster, index, or shard level.
      --local string                      Whether to get information from the local node.
      --master_timeout string             Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string                     Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                            Prettify response
  -s, --server string                     management server endpoint (required)
      --timeout string                    Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
      --wait_for_active_shards string     A number controlling to how many active shards to wait for, all to wait for all shards in the cluster to be active, or 0 to not wait. Defaults to 0.
      --wait_for_events string            Wait until all currently queued events with the given priority are processed.
      --wait_for_no_initializing_shards   boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard initializations. Defaults to false, which means it will not wait for initializing shards.
      --wait_for_no_relocating_shards     A boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard relocations. Defaults to false, which means it will not wait for relocating shards.
      --wait_for_nodes string             The request waits until the specified number N of nodes is available. It also accepts >=N, <=N, >N and <N. Alternatively, it is possible to use ge(N), le(N), gt(N) and lt(N) notation.
      --wait_for_status string            Will wait (until the timeout provided) until the status of the cluster changes to the one provided or better, i.e. green > yellow > red. By default, will not wait for any status.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
