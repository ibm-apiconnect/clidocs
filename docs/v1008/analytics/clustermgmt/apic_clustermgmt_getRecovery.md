---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getRecovery

Use the index recovery API to get information about ongoing and completed shard recoveries

## Synopsis

Returns information about ongoing and completed shard recoveries for one or more indices. For data streams, the API returns information for the stream's backing indices.

```
apic clustermgmt:getRecovery --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:getRecovery --mode analytics [flags]

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --active_only                If true, the response only includes ongoing shard recoveries. Defaults to false.
      --analytics-service string   Analytics service name or ID. (required)
      --detailed                   If true, the response includes detailed information about shard recoveries.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
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
