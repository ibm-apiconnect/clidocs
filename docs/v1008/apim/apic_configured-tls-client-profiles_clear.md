# apic configured-tls-client-profiles:clear

Configured Tls Client Profiles clear operations

## Synopsis

Configured Tls Client Profiles clear operations

```
apic configured-tls-client-profiles:clear [flags]
```

## Possible Usages

```
      apic configured-tls-client-profiles:clear [flags] --scope space CONFIGURED_TLS_CLIENT_PROFILE_NAME
      apic configured-tls-client-profiles:clear [flags] --scope catalog CONFIGURED_TLS_CLIENT_PROFILE_NAME
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --confirm string   Confirmation for critical updates (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for configured-tls-client-profiles:clear
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
