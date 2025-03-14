---
tags:
- "group: members"
- "scope: org"
---
# apic members:clear

Members clear operations

## Synopsis

Members clear operations

```
apic members:clear --mode consumer [flags]
```

## Possible Usages

```
apic members:clear --mode consumer [flags] --scope org
```

## Options

```
      --cascade          Cascade the behavior
      --confirm string   confirm clear
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for members:clear
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
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
