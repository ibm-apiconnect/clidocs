---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:deleteVotingConfigExclusions

Removes master-eligible nodes from the voting configuration exclusion list

## Synopsis

Removes master-eligible nodes from the voting configuration exclusion list.

```
apic clustermgmt:deleteVotingConfigExclusions --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:deleteVotingConfigExclusions --mode analytics [flags]

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --wait_for_removal           Specifies whether to wait for all excluded nodes to be removed from the cluster before clearing the voting configuration exclusions list. Defaults to true.
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
