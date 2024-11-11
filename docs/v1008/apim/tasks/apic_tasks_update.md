---
tags:
- "group: tasks"
- "scope: catalog"
- "scope: space"
---
# apic tasks:update

Tasks update operations

## Synopsis

Tasks update operations

```
apic tasks:update [flags]
```

## Possible Usages

```

      apic tasks:update [flags] --scope space TASK TASK_FILE
      apic tasks:update [flags] --scope catalog TASK TASK_FILE

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for tasks:update
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
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
