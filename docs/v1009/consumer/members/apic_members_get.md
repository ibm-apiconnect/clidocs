---
tags:
- "group: members"
- "scope: org"
---
# apic members:get

Members get operations

## Synopsis

Members get operations

```
apic members:get --mode consumer [flags]
```

## Possible Usages

```
apic members:get --mode consumer [flags] --scope org MEMBER
```

## Options

```
      --fields string   field name
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for members:get
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string    scope
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
