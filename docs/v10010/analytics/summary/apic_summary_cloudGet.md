---
tags:
- "group: summary"
- "scope: cloud"
---
# apic summary:cloudGet

Get specific summary event at cloud scope

## Synopsis

Return a single analytics summary event by ID scoped to the cloud. The item in the result set is determined by the passed in request query to this API.

```
apic summary:cloudGet --mode analytics [flags]
```

## Possible Usages

```
apic summary:cloudGet --mode analytics [flags] ID
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --fields string              A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.
                                   
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
