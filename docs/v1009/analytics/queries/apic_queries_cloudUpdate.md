---
tags:
- "group: queries"
- "scope: cloud"
---
# apic queries:cloudUpdate

Update a specific query at cloud scope

## Synopsis

Replace a query with contents of the request body.

```
apic queries:cloudUpdate --mode analytics [flags]
```

## Possible Usages

```
apic queries:cloudUpdate --mode analytics [flags] ID QUERY_UPDATE_REQUEST_FILE
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
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