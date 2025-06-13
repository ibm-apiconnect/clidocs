---
tags:
- "group: apis"
---
# apic apis:wsdl

Get the API wsdl document

## Synopsis

Get the API wsdl document

```
apic apis:wsdl --mode consumer [flags]
```

## Possible Usages

```
apic apis:wsdl --mode consumer [flags] --scope org ID
apic apis:wsdl --mode consumer [flags] ID
```

## Options

```
      --endpoint string   endpoint
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string     Write file(s) to directory, use - for STDOUT. (default: cwd)
  -s, --server string     management server endpoint (required)
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
