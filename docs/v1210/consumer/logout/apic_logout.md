---
tags:
- "group: logout"
---
# apic logout

Log out of an IBM API Connect cloud

## Synopsis

Log out of an IBM API Connect cloud

```
apic logout --mode consumer [flags]
```


## Examples

```
Clear the local authentication credentials for mgmnthost.com
$ apic logout --server mgmnthost.com
Logged out of server mgmnthost.com

```

## Options

```
  -h, --help            Help for logout
  -s, --server string   management server endpoint
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
