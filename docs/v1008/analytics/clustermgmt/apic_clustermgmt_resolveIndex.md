---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:resolveIndex

Resolve name and index patterns for indices, aliases and data streams

## Synopsis

Resolves the specified name(s) and/or index patterns for indices, aliases and data streams. Multiple patterns and remote clusters are supported.

```
apic clustermgmt:resolveIndex --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:resolveIndex --mode analytics [flags] INDEX_NAME
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

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
