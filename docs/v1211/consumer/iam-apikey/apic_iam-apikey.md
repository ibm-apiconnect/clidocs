---
tags:
- "group: iam-apikey"
---
# apic iam-apikey

Log in to an IBM API Connect cloud Reserved Instance using an IBM Cloud API key

## Synopsis

Log in to an IBM API Connect cloud Reserved Instance using an IBM Cloud API key

```
apic iam-apikey --mode consumer [flags]
```


## Examples

```
Interactive iam-apikey login
$ apic iam-apikey
Enter your IBM Cloud details
? Server: mgmnthost.com
? IBM Cloud API Key?: my-apikey
 Logged into mgmnthost.com successfully

Non-interactive 
$ apic iam-apikey --apiKey <apikey> --server mgmnthost.com
Logged into mgmnthost.com successfully

```

## Options

```
      --apiKey string          IBM cloud api key
  -h, --help                   Help for iam-apikey
  -s, --server string          management server endpoint
      --sync-roles             Synchronize roles with the API Manager after login
      --tokenendpoint string   iam server endpoint (default: iam.cloud.ibm.com)
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
