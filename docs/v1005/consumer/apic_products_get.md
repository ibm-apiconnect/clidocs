# apic products:get

Get the Product object by name and version

## Synopsis

Get the Product object by name and version

```
apic products:get --mode consumer [flags]
```

## Options

```
      --fields string   field name (default "add(product)")
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for products:get
      --id              id
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string    scope
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
