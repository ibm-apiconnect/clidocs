# apic services:clear

Services clear operations

## Synopsis

Services clear operations

```
apic services:clear [flags]
```

## Possible Usages

```
      apic services:clear [flags] --space-initiated SERVICE_NAME
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --confirm string                      Confirmation for critical updates (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for services:clear
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
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
