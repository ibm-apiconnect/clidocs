---
tags:
- "group: draft-apis"
---
# apic draft-apis:update

Update the Draft API object by name and version

## Synopsis

Update the Draft API object by name and version
          
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
apic draft-apis:update [flags]
```

## Possible Usages

```
apic draft-apis:update [flags] --id ID DRAFT_API_FILE
apic draft-apis:update [flags] NAME:VERSION DRAFT_API_FILE
```

## Request examples

------------------------------------------------------
#### Example of draft-apis update by name and version.
------------------------------------------------------

```
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
        "201":
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
swagger: "2.0"
```

## Options

```
      --api_type string       The type of api (asyncapi, rest, graphql, wsdl_to_rest, or wsdl)
      --disable_ws_security   Disable generation of WS-Security definitions in api
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string         management server endpoint (required)
      --wsdl_service string   Name of WSDL service to create the OpenAPI definition from
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
