---
tags:
- "group: activations"
- "scope: org"
---
# apic activations:clear

Activations clear operations

## Synopsis

Activations clear operations

```
apic activations:clear [flags]
```

## Possible Usages

```

      apic activations:clear [flags] --scope org

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --confirm string   Confirmation for critical updates (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for activations:clear
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
