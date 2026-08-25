---
tags:
- "group: entries"
- "scope: truststore"
---
# apic entries:update

Entries update operations

## Synopsis

Entries update operations

```
apic entries:update [flags]
```

## Possible Usages

```
apic entries:update [flags] --scope truststore ENTRY ENTRY_FILE
```

## Options

```
      --format string       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                Help for entries:update
  -o, --org string          Organization name or id (required)
      --output string       Write file(s) to directory, instead of STDOUT (default "-")
      --scope string        scope
  -s, --server string       management server endpoint (required)
      --truststore string   Truststore name or id (required)
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
