# apic data-sources:list

List the Data Source objects

## Synopsis

List the Data Source objects

```
apic data-sources:list --mode discovery [flags]
```

## Possible Usages

```
      apic data-sources:list --mode discovery [flags]
```

## Options

```
      --collector_type string   Optional collector_type to use to filter the list of Datasources
      --fields string           List of field names to return
      --format string           Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32             Maximum number of items to return
      --offset int32            Offset item number from list to begin return
  -o, --org string              Organization name or id (required)
      --output string           Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string           management server endpoint (required)
      --state string            Optional state to use to filter Discovered API lists
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
