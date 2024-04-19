# apic role-defaults:get

Role Defaults get operations

## Synopsis

Role Defaults get operations

```
apic role-defaults:get [flags]
```

## Possible Usages

```
      apic role-defaults:get [flags] --scope space --subcollection consumer ROLE_DEFAULT
      apic role-defaults:get [flags] --scope cloud --subcollection provider ROLE_DEFAULT
      apic role-defaults:get [flags] --scope cloud --subcollection consumer ROLE_DEFAULT
      apic role-defaults:get [flags] --scope catalog --subcollection consumer ROLE_DEFAULT
```

## Options

```
  -c, --catalog string         Catalog name or id (required)
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for role-defaults:get
  -o, --org string             Organization name or id (required)
      --output string          Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string           scope
  -s, --server string          management server endpoint (required)
      --space string           Space name or id (required)
      --subcollection string   subcollection
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
