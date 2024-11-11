---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:repositories

Get snapshot repositories

## Synopsis

Gets information about one or more registered snapshot repositories.

```
apic clustermgmt:repositories --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:repositories --mode analytics [flags]

```

## Options

```
      --analytics-service string         Analytics service name or ID. (required)
      --cluster_manager_timeout string   Amount of time to wait for a connection to the master node. Optional, defaults to 30 seconds.
      --format string                    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --local string                     Whether to get information from the local node.
      --output string                    Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string                    management server endpoint (required)
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
