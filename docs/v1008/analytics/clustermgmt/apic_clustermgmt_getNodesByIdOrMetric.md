---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getNodesByIdOrMetric

Returns cluster nodes information

## Synopsis

The cluster nodes info API allows to retrieve one or more (or all) of the cluster nodes information. By default, it returns all attributes and core settings for a node.

```
apic clustermgmt:getNodesByIdOrMetric --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:getNodesByIdOrMetric --mode analytics [flags]

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --flat_settings              If true, returns settings in flat format.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --node-id-or-metric string   Node ID or metric (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
  -s, --server string              management server endpoint (required)
      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
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
