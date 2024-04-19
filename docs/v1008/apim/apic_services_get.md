# apic services:get

Services get operations

## Synopsis

Services get operations

```
apic services:get [flags]
```

## Possible Usages

```
      apic services:get [flags] --id --space-initiated ID
      apic services:get [flags] --space-initiated NAME:VERSION
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for services:get
      --id                                  id
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, use - for STDOUT. (default: cwd)
  -s, --server string                       management server endpoint (required)
      --space string                        Space name or id (required)
      --space-initiated                     space-initiated
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
