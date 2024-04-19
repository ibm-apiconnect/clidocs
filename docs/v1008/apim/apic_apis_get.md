# apic apis:get

Apis get operations

## Synopsis

Apis get operations

```
apic apis:get [flags]
```

## Possible Usages

```
      apic apis:get [flags] --id --scope space ID
      apic apis:get [flags] --id --scope catalog ID
      apic apis:get [flags] --scope space NAME:VERSION
      apic apis:get [flags] --scope catalog NAME:VERSION
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return (default "add(wsdl,api)")
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for apis:get
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, use - for STDOUT. (default: cwd)
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
