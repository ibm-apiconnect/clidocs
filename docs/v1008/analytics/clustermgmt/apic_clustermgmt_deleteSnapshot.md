---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:deleteSnapshot

Delete snapshot

## Synopsis

Deletes one or more snapshots

```
apic clustermgmt:deleteSnapshot --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:deleteSnapshot --mode analytics [flags]
```

## Options

```
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --repository string          Comma-separated list of snapshot repository names. (required)
  -s, --server string              management server endpoint (required)
      --snapshot string            Comma-separated list of snapshot names to retrieve. (required)
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
