# apic products:set-migration-target

Products set-migration-target operations

## Synopsis

Products set-migration-target operations

```
apic products:set-migration-target [flags]
```

## Possible Usages

```
      apic products:set-migration-target [flags] --id --scope space ID PRODUCT_PLAN_MAPPING_FILE
      apic products:set-migration-target [flags] --id --scope catalog ID PRODUCT_PLAN_MAPPING_FILE
      apic products:set-migration-target [flags] --scope space NAME:VERSION PRODUCT_PLAN_MAPPING_FILE
      apic products:set-migration-target [flags] --scope catalog NAME:VERSION PRODUCT_PLAN_MAPPING_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:set-migration-target
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```