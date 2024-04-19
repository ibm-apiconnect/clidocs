# apic policies:get

Policies get operations

## Synopsis

Policies get operations

```
apic policies:get [flags]
```

## Possible Usages

```
      apic policies:get [flags] --id --scope space ID
      apic policies:get [flags] --id --scope org ID
      apic policies:get [flags] --id --scope catalog ID
      apic policies:get [flags] --scope space NAME:VERSION
      apic policies:get [flags] --scope org NAME:VERSION
      apic policies:get [flags] --scope catalog NAME:VERSION
```

## Options

```
      --availability-zone string            Availability Zone name or id (required)
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return (default "add(policy,implementation)")
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway-service string              Gateway Service name or id (required)
  -h, --help                                Help for policies:get
      --id                                  id
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string                        scope
  -s, --server string                       management server endpoint (required)
      --space string                        Space name or id (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
