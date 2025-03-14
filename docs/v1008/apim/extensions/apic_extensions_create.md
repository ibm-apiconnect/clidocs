---
tags:
- "group: extensions"
- "scope: catalog"
- "scope: space"
---
# apic extensions:create

Extensions create operations

## Synopsis

Extensions create operations

```
apic extensions:create [flags]
```

## Possible Usages

```
apic extensions:create [flags] --scope space EXTENSION_FILE
apic extensions:create [flags] --scope catalog EXTENSION_FILE
```

## Request examples

----------------------------------------------------
#### Example of extension creation at catalog scope.
----------------------------------------------------

```
extension: 1.0.0
info:
  contact:
    email: acme@example.com
    name: Aaron Cohen
    url: http://acme.example.com
  description: An example extension creation.
  license:
    name: Tom Clayton
    url: http://acmelicense.example.com
  name: acme-extension
  termsOfService: https://www.acme.com/legal
  title: Acme extension creation
  version: 1.0.0
```

--------------------------------------------------
#### Example of extension creation at space scope.
--------------------------------------------------

```
extension: 1.0.0
info:
  contact:
    email: acme@example.com
    name: Aaron Cohen
    url: http://acme.example.com
  description: An example extension creation.
  license:
    name: Tom Clayton
    url: http://acmelicense.example.com
  name: acme-extension
  termsOfService: https://www.acme.com/legal
  title: Acme extension creation
  version: 1.0.0
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for extensions:create
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                        scope
  -s, --server string                       management server endpoint (required)
      --space string                        Space name or id (required)
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
