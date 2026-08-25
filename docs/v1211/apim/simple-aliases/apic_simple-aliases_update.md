---
tags:
- "group: simple-aliases"
- "scope: catalog"
---
# apic simple-aliases:update

Simple Aliases update operations

## Synopsis

Simple Aliases update operations

```
apic simple-aliases:update [flags]
```

## Possible Usages

```
apic simple-aliases:update [flags] --space-initiated SIMPLE_ALIAS SIMPLE_ALIAS_FILE
apic simple-aliases:update [flags] --scope catalog SIMPLE_ALIAS SIMPLE_ALIAS_FILE
```

## Request examples

-----------------------------
#### Example for Simple Alias
-----------------------------

```
name: updated-acme-simple-alias
title: Updated ACME Simple Alias
value: alias
```

-----------------------------
#### Example for Simple Alias
-----------------------------

```
name: acme-simple-alias
title: Updated ACME Simple Alias
value: alias
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for simple-aliases:update
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --scope string      scope
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
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
