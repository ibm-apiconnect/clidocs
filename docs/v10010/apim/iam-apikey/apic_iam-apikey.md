---
tags:
- "group: iam-apikey"
---
# apic iam-apikey

Log in to an IBM API Connect cloud Reserved Instance using an IBM Cloud API key

## Synopsis

Log in to an IBM API Connect cloud Reserved Instance using an IBM Cloud API key

```
apic iam-apikey [flags]
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
      --tokenendpoint string   iam server endpoint (default: iam.cloud.ibm.com)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
