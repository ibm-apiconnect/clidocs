---
tags:
- "group: credentials"
---
# apic credentials:delete

Delete the Application Credential object by name or id

## Synopsis

Delete the Application Credential object by name or id

```
apic credentials:delete --mode consumer [flags]
```

## Possible Usages

```
apic credentials:delete --mode consumer [flags] CREDENTIAL
```

## Options

```
  -a, --app string      Application name or id (required)
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
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
