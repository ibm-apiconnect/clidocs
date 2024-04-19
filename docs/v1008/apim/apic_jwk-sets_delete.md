# apic jwk-sets:delete

Delete the Jwk Set object by name or id

## Synopsis

Delete the Jwk Set object by name or id

```
apic jwk-sets:delete [flags]
```

## Possible Usages

```
      apic jwk-sets:delete [flags] JWK_SET
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
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