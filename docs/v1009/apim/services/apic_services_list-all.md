---
tags:
- "group: services"
---
# apic services:list-all

Services list-all operations

## Synopsis

Services list-all operations

```
apic services:list-all [flags]
```

## Possible Usages

```
apic services:list-all [flags] --space-initiated
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for services:list-all
      --limit int32                         Maximum number of items to return
      --offset int32                        Offset item number from list to begin return
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string                       management server endpoint (required)
      --space string                        Space name or id (required)
      --space-initiated                     space-initiated
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
