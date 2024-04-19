# apic draft-products:get

Get the Draft Product object by name and version

## Synopsis

Get the Draft Product object by name and version

```
apic draft-products:get [flags]
```

## Possible Usages

```
      apic draft-products:get [flags] --id ID
      apic draft-products:get [flags] NAME:VERSION
```

## Options

```
      --fields string   List of field names to return (default "add(draft_product,url)")
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
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
