# apic validate

Validate an API or product definition

## Synopsis

`apic validate` does offline validation. For online validation, use `draft-apis:validate`, which does additional validation as would be done during stage/publish time.

```
apic validate [FILE] --mode consumer [flags]
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

```

## Options

```
  -h, --help            Help for validate
      --no-extensions   for API definitions, do not validate against IBM Swagger extensions
  -p, --product-only    for products definitions, do not validate referenced APIs
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
