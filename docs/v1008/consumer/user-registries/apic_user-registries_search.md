---
tags:
- "group: user-registries"
---
# apic user-registries:search

Search for users in the user registry

## Synopsis

Search for users in the user registry

```
apic user-registries:search --mode consumer [flags]
```

## Possible Usages

```
apic user-registries:search --mode consumer [flags] USER_REGISTRY USER_SEARCH_FILE
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32     Maximum number of items to return
      --offset int32    Offset item number from list to begin return
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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
