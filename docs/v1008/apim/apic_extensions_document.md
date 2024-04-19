# apic extensions:document

Extensions document operations

## Synopsis

Extensions document operations

```
apic extensions:document [flags]
```

## Possible Usages

```
      apic extensions:document [flags] --id --scope space ID
      apic extensions:document [flags] --id --scope org ID
      apic extensions:document [flags] --id --scope catalog ID
      apic extensions:document [flags] --scope space NAME:VERSION
      apic extensions:document [flags] --scope org NAME:VERSION
      apic extensions:document [flags] --scope catalog NAME:VERSION
```

## Options

```
      --availability-zone string            Availability Zone name or id (required)
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway-service string              Gateway Service name or id (required)
  -h, --help                                Help for extensions:document
      --id                                  id
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
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
