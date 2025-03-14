---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:putSettings

Configures dynamic cluster settings

## Synopsis

You can configure and update dynamic settings on a running cluster using the cluster update settings API. Updates made using the cluster update settings API can be persistent, which apply across cluster restarts, or transient, which reset after a cluster restart. You can also reset transient or persistent settings by assigning them a null value using the API.

```
apic clustermgmt:putSettings --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:putSettings --mode analytics [flags] SETTINGS_FILE
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --flat_settings              If true, returns settings in flat format.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --include_defaults           If true, returns all default cluster settings. Defaults to false.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
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
