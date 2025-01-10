---
tags:
- "group: destinations"
- "scope: org"
---
# apic destinations:orgDelete

Delete an engagement destination

## Synopsis

Deletes a single engagement destination.

```
apic destinations:orgDelete --mode engagement [flags]
```

## Possible Usages

```
apic destinations:orgDelete --mode engagement [flags] ID
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --force                      Force delete a destination even if it is in use by other rules.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
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
