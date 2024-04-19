# apic apis:update

Apis update operations

## Synopsis

Apis update operations

```
apic apis:update [flags]
```

## Possible Usages

```
      apic apis:update [flags] --id --scope space ID API_FILE
      apic apis:update [flags] --id --scope catalog ID API_FILE
      apic apis:update [flags] --scope space NAME:VERSION API_FILE
      apic apis:update [flags] --scope catalog NAME:VERSION API_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for apis:update
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
