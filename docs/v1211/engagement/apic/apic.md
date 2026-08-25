---
tags:
- "group: apic"
---
# apic

APIConnect toolkit f7721d0d695dcc7657b5cc0573e69c1226bd79c9 (Built 2026-08-21T17:58:03Z)


## Synopsis

APIConnect toolkit f7721d0d695dcc7657b5cc0573e69c1226bd79c9 (Built 2026-08-21T17:58:03Z)


```
apic [flags]
```


## Examples

```

To accept the license and disable live-help, you can run the following command:
$ apic --accept-license --live-help=false

To accept the license and enable live-help, you can run the following command:
$ apic --accept-license --live-help=true

To set the language, you can run the following command:
$ apic --lang [en-us|cs|de|es|fr|it|ja|ko|nl|pl|pt-br|ru|tr|zh-cn|zh-tw]
```

## Options

```
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
  -h, --help                            Help for apic
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```
