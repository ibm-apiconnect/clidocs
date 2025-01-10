---
tags:
- "group: resource-service-statuses"
---
# apic resource-service-statuses:list

List the Resource Service Status objects

## Synopsis

List the Resource Service Status objects

```
apic resource-service-statuses:list [flags]
```

## Possible Usages

```

      apic resource-service-statuses:list [flags]

```

## Options

```
      --fields string         List of field names to return
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32           Maximum number of items to return
      --offset int32          Offset item number from list to begin return
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
      --resource_url string   URL of the resource
  -s, --server string         management server endpoint (required)
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