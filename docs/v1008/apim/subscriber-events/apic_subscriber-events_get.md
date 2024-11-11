---
tags:
- "group: subscriber-events"
- "scope: catalog"
- "scope: cloud"
---
# apic subscriber-events:get

Subscriber Events get operations

## Synopsis

Subscriber Events get operations

```
apic subscriber-events:get [flags]
```

## Possible Usages

```

      apic subscriber-events:get [flags] --scope cloud SUBSCRIBER_EVENT
      apic subscriber-events:get [flags] --scope catalog SUBSCRIBER_EVENT

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for subscriber-events:get
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --webhook string   Webhook name or id (required)
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
