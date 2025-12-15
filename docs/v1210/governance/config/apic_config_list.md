---
tags:
- "group: config"
---
# apic config:list

List the application and global configuration variables

## Synopsis

config_topic_long_governance

```
apic config:list --mode governance [flags]
```


## Examples

```
cmd_config_list_examples_governance
```

## Options

```
  -g, --global   list the global configuration variables
  -h, --help     Help for config:list
  -l, --local    list the local application configuration variables
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
