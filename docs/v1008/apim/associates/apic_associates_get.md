---
tags:
- "group: associates"
- "scope: consumer-org"
- "scope: org"
---
# apic associates:get

Associates get operations

## Synopsis

Associates get operations

```
apic associates:get [flags]
```

## Possible Usages

```

      apic associates:get [flags] --scope consumer-org --space-initiated ASSOCIATE
      apic associates:get [flags] --scope org ASSOCIATE
      apic associates:get [flags] --scope consumer-org ASSOCIATE

```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --fields string         List of field names to return
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for associates:get
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string          scope
  -s, --server string         management server endpoint (required)
      --space string          Space name or id (required)
      --space-initiated       space-initiated
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
