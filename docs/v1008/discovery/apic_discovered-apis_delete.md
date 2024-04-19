# apic discovered-apis:delete

Delete a Discovered API

## Synopsis

Delete a Discovered API

```
apic discovered-apis:delete --mode discovery [flags]
```

## Possible Usages

```
      apic discovered-apis:delete --mode discovery [flags] --id ID
      apic discovered-apis:delete --mode discovery [flags] NAME:VERSION
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
