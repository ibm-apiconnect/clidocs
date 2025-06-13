---
tags:
- "group: extensions"
- "scope: catalog"
- "scope: space"
---
# apic extensions:update

Extensions update operations

## Synopsis

Extensions update operations

```
apic extensions:update [flags]
```

## Possible Usages

```
apic extensions:update [flags] --id --scope space ID EXTENSION_FILE
apic extensions:update [flags] --id --scope catalog ID EXTENSION_FILE
apic extensions:update [flags] --scope space NAME:VERSION EXTENSION_FILE
apic extensions:update [flags] --scope catalog NAME:VERSION EXTENSION_FILE
```

## Request examples

----------------------------------------------------------------------
#### Example of extension update by name and version at catalog scope.
----------------------------------------------------------------------

```
extension: 1.0.0
info:
  contact:
    email: acme@example.com
    name: Aaron Cohen
    url: http://acme.example.com
  description: An example extension update.
  license:
    name: Tom Clayton
    url: http://acmelicense.example.com
  name: acme-extension
  termsOfService: https://www.acme.com/legal
  title: Acme extension update
  version: 1.0.0
```

--------------------------------------------------------
#### Example of extension update by id at catalog scope.
--------------------------------------------------------

```
extension: 1.0.0
info:
  contact:
    email: acme@example.com
    name: Aaron Cohen
    url: http://acme.example.com
  description: An example extension update.
  license:
    name: Tom Clayton
    url: http://acmelicense.example.com
  name: acme-extension
  termsOfService: https://www.acme.com/legal
  title: Acme extension update
  version: 1.0.0
```

--------------------------------------------------------------------
#### Example of extension update by name and version at space scope.
--------------------------------------------------------------------

```
extension: 1.0.0
info:
  contact:
    email: acme@example.com
    name: Aaron Cohen
    url: http://acme.example.com
  description: An example extension update.
  license:
    name: Tom Clayton
    url: http://acmelicense.example.com
  name: acme-extension
  termsOfService: https://www.acme.com/legal
  title: Acme extension update
  version: 1.0.0
```

------------------------------------------------------
#### Example of extension update by id at space scope.
------------------------------------------------------

```
extension: 1.0.0
info:
  contact:
    email: acme@example.com
    name: Aaron Cohen
    url: http://acme.example.com
  description: An example extension update.
  license:
    name: Tom Clayton
    url: http://acmelicense.example.com
  name: acme-extension
  termsOfService: https://www.acme.com/legal
  title: Acme extension update
  version: 1.0.0
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for extensions:update
      --id                                  id
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
