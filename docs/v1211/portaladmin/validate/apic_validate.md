---
tags:
- "group: validate"
---
# apic validate

Validate an API, product, or project definition

## Synopsis

`apic validate` does offline validation. For online validation, use `draft-apis:validate`, which does additional validation as would be done during stage/publish time.

For project validation, it validates project build artifacts against gateway-specific specifications and automatically detects the gateway type based on the policies used in the project.

```
apic validate [FILE] --mode portaladmin [flags]
```


## Examples

```
Validate an API definition
  $ apic validate routes.yaml
  Validated routes.yaml API definition [routes:1.0]
Validate an API definition without IBM extensions
  $ apic validate --no-extensions routes.yaml
  Validated routes.yaml API definition [routes:1.0]
Validate a product definition and its referenced APIs
  $ apic validate climb-on.yaml
  Validated climb-on.yaml product definition [climb-on:1.0.0]
  Validated routes.yaml API definition [valid:1.0]
Validate a product definition without validating its referenced APIs
  $ apic validate --product-only climb-on.yaml
  Validated climb-on.yaml product definition [climb-on:1.0.0]
Validating a single project
  $apic validate <project-name> --localDir <path-to-project-dir>
Validating multiple projects
  $apic validate <project-name-1>,<project-name-2> --localDir <path-to-project-dir>
Validating all projects
  $apic validate --all --localDir <path-to-project-dir>

```

## Options

```
      --all               validate all projects in the directory
  -h, --help              Help for validate
  -l, --localDir string   path of the local directory
      --no-extensions     for API definitions, do not validate against IBM Swagger extensions
  -p, --product-only      for products definitions, do not validate referenced APIs
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
