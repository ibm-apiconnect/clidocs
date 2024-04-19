# apic clustermgmt:getNodesHotThreads

Returns the hot threads on each selected node in the cluster

## Synopsis

This API yields a breakdown of the hot threads on each selected node in the cluster. The output is plain text with a breakdown of each node's top hot threads.

```
apic clustermgmt:getNodesHotThreads --mode analytics [flags]
```

## Possible Usages

```
      apic clustermgmt:getNodesHotThreads --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --ignore_idle_threads        If true, known idle threads (e.g. waiting in a socket select, or to get a task from an empty queue) are filtered out. Defaults to true.
      --interval string            The interval to do the second sampling of threads. Defaults to 500ms.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
  -s, --server string              management server endpoint (required)
      --snapshots int32            Number of samples of thread stacktrace. Defaults to 10.
      --threads int32              Specifies the number of hot threads to provide information for. Defaults to 3.
      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
      --type string                The type to sample. Defaults to cpu.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
