# apic user-registry-settings:update

Update the User Registry Setting object

## Synopsis

Update the User Registry Setting object
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic user-registry-settings:update [flags]
```

## Possible Usages

```
      apic user-registry-settings:update [flags] USER_REGISTRY_SETTING_FILE
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
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
