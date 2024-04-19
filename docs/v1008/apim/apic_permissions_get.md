# apic permissions:get

Permissions get operations

## Synopsis

Permissions get operations

```
apic permissions:get [flags]
```

## Possible Usages

```
      apic permissions:get [flags] --subcollection provider PERMISSION
      apic permissions:get [flags] --subcollection org PERMISSION
      apic permissions:get [flags] --subcollection deployment PERMISSION
      apic permissions:get [flags] --subcollection consumer PERMISSION
      apic permissions:get [flags] --subcollection cloud PERMISSION
```

## Options

```
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for permissions:get
      --output string          Write file(s) to directory, use - for STDOUT. (default: cwd)
  -s, --server string          management server endpoint (required)
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
