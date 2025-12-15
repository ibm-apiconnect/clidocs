---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getFlush

Flushes one or more data streams or indices

## Synopsis

Flushing a data stream or index is the process of making sure that any data that is currently only stored in the transaction log is also permanently stored in the Lucene index.

```
apic clustermgmt:getFlush --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:getFlush --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.
      --analytics-service string   Analytics service name or ID. (required)
      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.
                                   
      --force                      If true, the request forces a flush even if there are no changes to commit to the index. Defaults to true.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can't be returned) will be ignored. Defaults to false.
                                   
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --wait_if_ongoing            If true, the flush operation blocks until execution when another flush operation is running
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
