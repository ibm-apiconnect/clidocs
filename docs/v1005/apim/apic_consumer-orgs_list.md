# apic consumer-orgs:list

List the Consumer Organization objects

## Synopsis

List the Consumer Organization objects

```
apic consumer-orgs:list [flags]
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --expand string     List of transient field to expand
      --fields string     List of field names to return
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for consumer-orgs:list
      --limit int32       Maximum number of items to return
      --offset int32      Offset item number from list to begin return
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
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
