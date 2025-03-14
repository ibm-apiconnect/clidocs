---
tags:
- "group: apis"
---
# apic apis:get

Get the API object by name and version

## Synopsis

Get the API object by name and version

```
apic apis:get --mode consumer [flags]
```

## Possible Usages

```
apic apis:get --mode consumer [flags] --id --scope org ID
apic apis:get --mode consumer [flags] --scope org NAME:VERSION
apic apis:get --mode consumer [flags] --id ID
apic apis:get --mode consumer [flags] NAME:VERSION
```

## Options

```
      --fields string   field name (default "add(wsdl,api)")
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
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
