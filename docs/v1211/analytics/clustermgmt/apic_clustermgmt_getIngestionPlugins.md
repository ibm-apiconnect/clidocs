---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getIngestionPlugins

Information about all Logstash plugins that are currently installed

## Synopsis

Provides information about all Logstash plugins that are currently installed.

```
apic clustermgmt:getIngestionPlugins --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:getIngestionPlugins --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
      --return_format string       Short version of the HTTP accept header. Valid values include JSON, YAML, etc.
  -s, --server string              management server endpoint (required)
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
