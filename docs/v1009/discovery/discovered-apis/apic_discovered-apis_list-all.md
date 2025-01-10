---
tags:
- "group: discovered-apis"
---
# apic discovered-apis:list-all

List all Discovered API objects in all collections

## Synopsis

List all Discovered API objects in all collections

```
apic discovered-apis:list-all --mode discovery [flags]
```

## Possible Usages

```
apic discovered-apis:list-all --mode discovery [flags]
```

## Options

```
      --api_ids string                  Ids of Discovered APIs selected for bulk download
      --document_specification string   Optional document specification (type) to use to filter Discovered API lists
      --fields string                   List of field names to return
      --format string                   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32                     Maximum number of items to return
      --offset int32                    Offset item number from list to begin return
  -o, --org string                      Organization name or id (required)
      --output string                   Write file(s) to directory, instead of STDOUT (default "-")
      --search_filter string            Optional search of Discovered APIs that contain provided values of their properties
  -s, --server string                   management server endpoint (required)
      --show_hidden                     Include results of hidden APIs or only return APIs that are not hidden
      --source string                   Optional source to use to filter Discovered API lists
      --state string                    Optional state to use to filter Discovered API lists
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
