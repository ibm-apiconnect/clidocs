# apic consumer-orgs:get

Get the Consumer Organization object by name or id

## Synopsis

Get the Consumer Organization object by name or id

```
apic consumer-orgs:get [flags]
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --fields string     List of field names to return
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for consumer-orgs:get
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, use - for STDOUT. (default: cwd)
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
