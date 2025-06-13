---
tags:
- "group: watsonx-settings"
- "scope: org"
---
# apic watsonx-settings:update

Watsonx Settings update operations

## Synopsis

Watsonx Settings update operations

```
apic watsonx-settings:update [flags]
```

## Possible Usages

```
apic watsonx-settings:update [flags] --scope org WATSONX_SETTINGS_FILE
```

## Options

```
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                      Help for watsonx-settings:update
  -o, --org string                Organization name or id (required)
      --output string             Write file(s) to directory, instead of STDOUT (default "-")
      --scope string              scope
  -s, --server string             management server endpoint (required)
      --watsonx-settings string   Watsonx Settings name or id (required)
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
