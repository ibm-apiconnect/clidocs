---
tags:
- "group: users"
---
# apic users:sign-up

Sign up a user

## Synopsis

Sign up a user

```
apic users:sign-up --mode consumer [flags]
```

## Possible Usages

```
apic users:sign-up --mode consumer [flags] SIGN_UP_FILE
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
