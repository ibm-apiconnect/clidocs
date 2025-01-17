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
