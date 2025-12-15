---
tags:
- "group: build"
---
# apic build

Builds and archives the specified project assets

## Synopsis

Builds and archives the specified project assets

```
apic build [flags]
```


## Options

```

  -l, --localDir <localDir>  path of the local directory of the specified
                             project asset. For example, C:\local_dir
  -o, --output <output>      path where the output file should be stored. For
                             example, C:\dir\build.zip
  -a, --all                  builds all projects existing in the local
                             directory
  -n, --names <names>        builds the specified api asset kind. For example,
                             dev:paymentAPI:1.0
  -d, --debug                enable debug mode
  -h, --help                 display help for command
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
