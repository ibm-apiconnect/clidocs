---
tags:
- "group: rules"
---
# apic rules:get

Download the Rule object as a file to the current directory by name:version or id

## Synopsis

Download the Rule object as a file to the current directory by name:version. If you would like to use the id of the Rule object the --id flag must be specified followed by the id of the Rule object.

```
apic rules:get --mode governance [flags]
```

## Possible Usages

```
apic rules:get --mode governance [flags] --id ID
apic rules:get --mode governance [flags] NAME:VERSION
```

## Options

```
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, use - for STDOUT. (default: cwd)
      --ruleset string   Ruleset name or id (required)
  -s, --server string    management server endpoint (required)
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
