# apic data-sources:update

Update the Data Source object by name or id

## Synopsis

Update the Data Source object by name or id
          
          Fields not allowed:
          - name
          
          Fields allowed but ignored:
          - last_run
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic data-sources:update --mode discovery [flags]
```

## Possible Usages

```
      apic data-sources:update --mode discovery [flags] DATA_SOURCE DATA_SOURCE_FILE
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
