# apic sites:reset-upgrade-attempts

Resets the Developer Portal site upgrade attempts.

## Synopsis

Resets the Developer Portal site upgrade attempts. Useful when upgrade has been attempted multiple times and has failed.

```
apic sites:reset-upgrade-attempts --mode portaladmin [flags]
```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                         Help for sites:reset-upgrade-attempts
      --portal_service_name string   The name of the Portal Service (required)
  -s, --server string                management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
