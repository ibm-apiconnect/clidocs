---
tags:
- "group: events"
- "scope: cloud"
---
# apic events:cloudScrollDelete

Clears the scroll search context

## Synopsis

Clears the scroll search context and results for a scrolling search. Should be used when the scroll context is not needed since otherwise it will stay open until it times out.

```
apic events:cloudScrollDelete --mode analytics [flags]
```

## Possible Usages

```

      apic events:cloudScrollDelete --mode analytics [flags] SCROLL_ID

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
