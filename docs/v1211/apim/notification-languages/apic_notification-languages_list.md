---
tags:
- "group: notification-languages"
- "scope: catalog"
- "scope: cloud"
- "scope: org"
- "scope: space"
---
# apic notification-languages:list

Notification Languages list operations

## Synopsis

Notification Languages list operations

```
apic notification-languages:list [flags]
```

## Possible Usages

```
apic notification-languages:list [flags] --scope space --subcollection space
apic notification-languages:list [flags] --scope space --subcollection consumer
apic notification-languages:list [flags] --scope org --subcollection space
apic notification-languages:list [flags] --scope org --subcollection provider
apic notification-languages:list [flags] --scope org --subcollection consumer
apic notification-languages:list [flags] --scope org --subcollection catalog
apic notification-languages:list [flags] --scope org --subcollection admin
apic notification-languages:list [flags] --scope cloud --subcollection space
apic notification-languages:list [flags] --scope cloud --subcollection provider
apic notification-languages:list [flags] --scope cloud --subcollection consumer
apic notification-languages:list [flags] --scope cloud --subcollection cloud
apic notification-languages:list [flags] --scope cloud --subcollection catalog
apic notification-languages:list [flags] --scope cloud --subcollection admin
apic notification-languages:list [flags] --scope catalog --subcollection space
apic notification-languages:list [flags] --scope catalog --subcollection consumer
apic notification-languages:list [flags] --scope catalog --subcollection catalog
```

## Options

```
  -c, --catalog string                 Catalog name or id (required)
      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                           Help for notification-languages:list
      --notification-template string   Notification Template name or id (required)
  -o, --org string                     Organization name or id (required)
      --output string                  Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                   scope
  -s, --server string                  management server endpoint (required)
      --space string                   Space name or id (required)
      --subcollection string           subcollection
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
