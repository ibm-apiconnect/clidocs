---
tags:
- "group: watsonx-settings"
---
# apic watsonx-settings:test-connection

Watsonx Settings test-connection operations

## Synopsis

Watsonx Settings test-connection operations

```
apic watsonx-settings:test-connection [flags]
```

## Possible Usages

```
apic watsonx-settings:test-connection [flags] --test-config-only WATSONX_SETTINGS_TEST_CONNECTION_FILE
```

## Options

```
      --format string      Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help               Help for watsonx-settings:test-connection
  -o, --org string         Organization name or id (required)
      --output string      Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string      management server endpoint (required)
      --test-config-only   test-config-only
```

## Options inherited from parent commands

```
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```
