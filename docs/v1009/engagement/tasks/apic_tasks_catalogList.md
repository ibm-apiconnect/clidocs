---
tags:
- "group: tasks"
- "scope: catalog"
---
# apic tasks:catalogList

List tasks for an engagement rule at catalog scope

## Synopsis

Return a result set of tasks.

```
apic tasks:catalogList --mode engagement [flags]
```

## Possible Usages

```
apic tasks:catalogList --mode engagement [flags] ID
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
  -c, --catalog string             Catalog name or ID. (required)
      --end string                 If set, only return items with a datetime equal or older than this. The date-time value should be in ISO format. For example, 2021-07-21T00:00:000Z.
                                   
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit string               If set, the number of items to return when requesting a list. Maximum: 500
      --offset string              If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --search string              Search for an item by name or description.
  -s, --server string              management server endpoint (required)
      --severity string            Rule severity.
      --start string               If set, only return items with a datetime equal or newer than this. The date-time value should be in ISO format. For example, 2021-07-21T00:00:000Z.
                                   
      --status string              Task status.
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
