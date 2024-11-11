---
tags:
- "group: task-histories"
- "scope: catalog"
- "scope: space"
---
# apic task-histories:get

Task Histories get operations

## Synopsis

Task Histories get operations

```
apic task-histories:get [flags]
```

## Possible Usages

```

      apic task-histories:get [flags] --scope space TASK_HISTORY
      apic task-histories:get [flags] --scope catalog TASK_HISTORY

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for task-histories:get
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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
