# apic service-ip-allowlist:add

Add IP(s) to the allowlist.

## Synopsis

Add IP(s) to the allowlist

```
apic service-ip-allowlist:add --mode portaladmin [flags]
```

## Possible Usages

```
      apic service-ip-allowlist:add --mode portaladmin [flags]
```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --ips string                   Comma seperated list of IPs. (required)
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