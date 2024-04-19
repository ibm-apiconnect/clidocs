# apic discovered-apis:update

Update the Discovered API object by name and version

## Synopsis

Update the Discovered API object by name and version
          
          Fields not allowed:
          - name
          
          Fields allowed but ignored:
          - title
          - version
          - api_type
          - document_specification
          - servers
          - paths
          - base_paths
          - host
          - schemes
          - tags
          - promotion_events
          - source
          - source_type
          - original_format
          - generated_url
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic discovered-apis:update --mode discovery [flags]
```

## Possible Usages

```
      apic discovered-apis:update --mode discovery [flags] --id ID DISCOVERED_API_FILE
      apic discovered-apis:update --mode discovery [flags] NAME:VERSION DISCOVERED_API_FILE
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
