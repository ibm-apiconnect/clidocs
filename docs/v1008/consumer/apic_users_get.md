# apic users:get

Get the User object by name or id

## Synopsis

Get the User object by name or id

```
apic users:get --mode consumer [flags]
```

## Possible Usages

```
      apic users:get --mode consumer [flags] USER
```

## Options

```
      --fields string          field name
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string          Write file(s) to directory, use - for STDOUT. (default: cwd)
  -s, --server string          management server endpoint (required)
      --user-registry string   User Registry name or id (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
