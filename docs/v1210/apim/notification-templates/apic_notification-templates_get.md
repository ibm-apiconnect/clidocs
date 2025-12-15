---
tags:
- "group: notification-templates"
- "scope: catalog"
- "scope: cloud"
- "scope: org"
- "scope: space"
---
# apic notification-templates:get

Notification Templates get operations

## Synopsis

Notification Templates get operations

```
apic notification-templates:get [flags]
```

## Possible Usages

```
apic notification-templates:get [flags] --scope space --subcollection space NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope space --subcollection consumer NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope org --subcollection space NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope org --subcollection provider NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope org --subcollection consumer NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope org --subcollection catalog NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope org --subcollection admin NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope cloud --subcollection space NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope cloud --subcollection provider NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope cloud --subcollection consumer NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope cloud --subcollection cloud NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope cloud --subcollection catalog NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope cloud --subcollection admin NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope catalog --subcollection space NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope catalog --subcollection consumer NOTIFICATION_TEMPLATE
apic notification-templates:get [flags] --scope catalog --subcollection catalog NOTIFICATION_TEMPLATE
```

## Options

```
  -c, --catalog string         Catalog name or id (required)
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for notification-templates:get
  -o, --org string             Organization name or id (required)
      --output string          Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string           scope
  -s, --server string          management server endpoint (required)
      --space string           Space name or id (required)
      --subcollection string   subcollection
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
