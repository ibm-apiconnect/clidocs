---
tags:
- "group: mail-servers"
---
# apic mail-servers:test-connection

Test a Mail Server connection

## Synopsis

Test a Mail Server connection

```
apic mail-servers:test-connection [flags]
```

## Possible Usages

```
apic mail-servers:test-connection [flags] --test-config-only MAIL_SERVER_PROVIDED_TEST_CONNECTION_FILE
apic mail-servers:test-connection [flags] MAIL_SERVER MAIL_SERVER_SAVED_TEST_CONNECTION_FILE
```

## Request examples

--------------------------------------------
#### Example of mail server test connection.
--------------------------------------------

```
recipients:
- acme@example.com
```

---------------------------------------------------------------
#### Example of mail server test connection (test config only).
---------------------------------------------------------------

```
mail_server:
  credentials:
    password: Passw0rd
    username: Acme
  host: acme.example.com
  name: acme-mail-server
  port: 25
  secure: true
  title: Acme mail server test connection
recipients:
- acme@example.com
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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
