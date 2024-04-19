# apic users:request-password-reset

Send reset password link

## Synopsis

Send reset password link

```
apic users:request-password-reset --mode consumer [flags]
```

## Possible Usages

```
      apic users:request-password-reset --mode consumer [flags] REQUEST_PASSWORD_RESET_FILE
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
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
