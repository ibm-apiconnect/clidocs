---
tags:
- "group: discovered-apis"
---
# apic discovered-apis

Discovered Apis operations

## Synopsis

Discovered Apis operations

```
apic discovered-apis --mode discovery [flags]
```


## Options

```
      --api_ids string                  Ids of Discovered APIs selected for bulk download
      --document_specification string   Optional document specification (type) to use to filter Discovered API lists
      --fields string                   List of field names to return
      --format string                   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                            Help for discovered-apis
      --limit int32                     Maximum number of items to return
      --offset int32                    Offset item number from list to begin return
  -o, --org string                      Organization name or id (required)
      --output string                   Write file(s) to directory, instead of STDOUT (default "-")
      --search_filter string            Optional search of Discovered APIs that contain provided values of their properties
  -s, --server string                   management server endpoint (required)
      --show_hidden                     Include results of hidden APIs or only return APIs that are not hidden
      --source string                   Optional source to use to filter Discovered API lists
      --source_type string              Optional source type to use to filter Discovered API lists (static or dynamic)
      --state string                    Optional state to use to filter Discovered API lists
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
