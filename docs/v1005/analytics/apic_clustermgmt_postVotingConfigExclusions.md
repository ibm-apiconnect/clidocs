# apic clustermgmt:postVotingConfigExclusions

Adds master-eligible nodes from the voting configuration exclusion list.

## Synopsis

Adds master-eligible nodes from the voting configuration exclusion list.

```
apic clustermgmt:postVotingConfigExclusions --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                       Help for clustermgmt:postVotingConfigExclusions
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --node_ids string            A comma-separated list of the persistent ids of nodes.
      --node_names string          A comma-separated list of the names of the nodes.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --timeout string             Time to wait for the specified nodes to be excluded from the voting configuration before returning. Defaults to 30s.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
