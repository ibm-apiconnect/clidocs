---
tags:
- "group: configured-oauth-providers"
- "scope: catalog"
- "scope: space"
---
# apic configured-oauth-providers:create

Configured Oauth Providers create operations

## Synopsis

Configured Oauth Providers create operations

```
apic configured-oauth-providers:create [flags]
```

## Possible Usages

```

      apic configured-oauth-providers:create [flags] --scope space CONFIGURED_OAUTH_PROVIDER_FILE
      apic configured-oauth-providers:create [flags] --scope catalog CONFIGURED_OAUTH_PROVIDER_FILE

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for configured-oauth-providers:create
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
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
