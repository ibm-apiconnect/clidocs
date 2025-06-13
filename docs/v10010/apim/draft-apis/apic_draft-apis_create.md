---
tags:
- "group: draft-apis"
---
# apic draft-apis:create

Create a Draft API object

## Synopsis

Create a Draft API object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url

```
apic draft-apis:create [flags]
```

## Possible Usages

```
apic draft-apis:create [flags] DRAFT_API_FILE
```

## Request examples

------------------------------------
#### Example of draft-apis creation.
------------------------------------

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
      --api_type string        The type of api (asyncapi, rest, graphql, wsdl_to_rest, or wsdl)
      --assembly_type string   The type of the assembly to generate (rest_to_proxy)
      --disable_ws_security    Disable generation of WS-Security definitions in api
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_type string    The type of the gateway (datapower-gateway, datapower-api-gateway, event-gateway)
  -o, --org string             Organization name or id (required)
      --output string          Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string          management server endpoint (required)
      --wsdl_service string    Name of WSDL service to create the OpenAPI definition from
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
