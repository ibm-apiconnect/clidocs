---
tags:
- "group: users"
---
# apic users:request-password-reset

Send reset password link

## Synopsis

Send reset password link

```
apic users:request-password-reset [flags]
```

## Possible Usages

```
apic users:request-password-reset [flags] REQUEST_PASSWORD_RESET_FILE
```

## Request examples

--------------------------------------------
#### Example of user request password reset.
--------------------------------------------

```
email: acme@example.com
realm: provider/default-idp-2
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
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
