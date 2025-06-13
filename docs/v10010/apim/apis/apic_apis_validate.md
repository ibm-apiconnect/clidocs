---
tags:
- "group: apis"
---
# apic apis:validate

Validate the API object

## Synopsis

Validate the API object

```
apic apis:validate [flags]
```

## Possible Usages

```
apic apis:validate [flags] DRAFT_API_FILE
```

## Examples

```
Online API definition validation
  $ apic apis:validate --org <provider-org-name-or-id> --server mgmnthost.com myapi.yaml
```

## Request examples

-------------------------------
#### Example of validating api.
-------------------------------

```
basePath: /products-api
consumes:
- application/json
gateway: datapower-api-gateway
info:
  description: An API for managing product details.
  title: Product Management API
  version: 1.0.0
  x-ibm-name: product-management-api
paths:
  /products:
    post:
      operationId: product.create
      parameters:
      - description: Product details.
        in: body
        name: productData
        required: true
        schema:
          properties:
            description:
              type: string
            name:
              type: string
            product_id:
              type: string
          required:
          - product_id
          - name
          type: object
      responses:
        "200":
          description: Product created successfully.
          schema:
            properties:
              message:
                type: string
              product_id:
                type: string
            type: object
      summary: Create a new product.
      tags:
      - product
produces:
- application/json
schemes:
- https
security:
- api-key-1: []
securityDefinitions:
  api-key-1:
    in: header
    name: X-IBM-Client-Id
    type: apiKey
    x-key-type: client_id
swagger: "2.0"
tags:
- description: Operations related to products.
  name: product
type: rest
x-ibm-configuration:
  assembly:
    execute:
    - operation-switch:
        case:
        - execute:
          - invoke:
              target-url: https://acme.com/products
              timeout: 60
              title: invoke
              verb: POST
          operations:
          - product.create
        title: operation-switch
  cors:
    enabled: true
  enforced: true
  phase: realized
  testable: true
```

## Options

```
      --catalog_name string            Name of a catalog
      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_names string   Names of Gateway Services
  -o, --org string                     Organization name or id (required)
      --output string                  Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                   scope
  -s, --server string                  management server endpoint (required)
      --space_name string              Name of a space
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
