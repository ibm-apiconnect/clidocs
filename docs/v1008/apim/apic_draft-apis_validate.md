# apic draft-apis:validate

Validate the draft API

## Synopsis

Validate the draft API

```
apic draft-apis:validate [flags]
```

## Possible Usages

```
      apic draft-apis:validate [flags] --id ID
      apic draft-apis:validate [flags] NAME:VERSION
```

## Examples

```
Online Draft API validation
  $ apic draft-apis:validate --org <provider-org-name-or-id> --server mgmnthost.com globalweather:1.0.0
Online validation of API definition against a specific catalog
  $ apic draft-apis:validate --org <provider-org-name-or-id> --server mgmnthost.com --catalog_name <catalog-name> --scope <scope>  globalweather:1.0.0
Online validation of API definition against a specific catalog and 1 or more configured gateway services
  $ apic draft-apis:validate --org <provider-org-name-or-id> --server mgmnthost.com --catalog_name <catalog-name> --scope <scope> --gateway_service_names <gateway-service-name> globalweather:1.0.0
```

## Options

```
      --catalog_name string            Name of a catalog
      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_names string   Names of Gateway Services
  -o, --org string                     Organization name or id (required)
      --output string                  Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                   scope
  -s, --server string                  management server endpoint (required)
      --space_name string              Name of a space
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
