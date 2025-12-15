---
tags:
- "group: task-queues"
- "scope: cloud"
---
# apic task-queues:get

Task Queues get operations

## Synopsis

Task Queues get operations

```
apic task-queues:get [flags]
```

## Possible Usages

```
apic task-queues:get [flags] --scope cloud TASK_QUEUE
```

## Options

```
      --cascade         Cascade the behavior
      --fields string   List of field names to return
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for task-queues:get
      --kind string     kind of item
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
      --query string    Add query to request
      --scope string    scope
  -s, --server string   management server endpoint (required)
      --state string    State for a webhook event in subscriber queue
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
