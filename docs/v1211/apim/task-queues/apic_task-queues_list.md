---
tags:
- "group: task-queues"
- "scope: cloud"
---
# apic task-queues:list

Task Queues list operations

## Synopsis

Task Queues list operations

```
apic task-queues:list [flags]
```

## Possible Usages

```
apic task-queues:list [flags] --scope cloud
```

## Options

```
      --apply_filter    Filter tasks
      --cascade         Cascade the behavior
      --fields string   List of field names to return
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for task-queues:list
      --kind string     kind of item
      --limit int32     Maximum number of items to return
      --offset int32    Offset item number from list to begin return
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
      --query string    Add query to request
      --scope string    scope
  -s, --server string   management server endpoint (required)
      --state string    State for a webhook event in subscriber queue
      --target string   target for the task
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
