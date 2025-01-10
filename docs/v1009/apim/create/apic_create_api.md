---
tags:
- "group: create"
---
# apic create:api

Create an OpenAPI (Swagger) definition

## Synopsis

Create an OpenAPI (Swagger) definition

```
apic create:api [flags]
```

## Examples

```
Create an API
  $ apic create:api --title Routes
  Created routes.yaml API definition [routes:1.0.0]

Create an API and generate a product referencing the API
  $ apic create:api --title Routes --product "Climb On"
  Created routes.yaml API definition [routes:1.0.0]
  Created climb-on.yaml product definition [climb-on:1.0.0]

Create an API interactively
  $ apic create:api
  Title: Routes
  Name (routes): routes
  File (routes.yaml): routes.yaml
  Template: ()
  Basepath (/routes): /routes
  Hostname ($(catalog.host)): $(catalog.host)
  Schemes:
  Target url: ()
  Create product [true]: true
  Product title (Routes Product): Climb On
  Product name (climb-on): climb-on
  Product file (climb-on.yaml): climb-on.yaml
  Created routes.yaml API definition [routes:1.0.0]
  Created climb-on.yaml product definition [climb-on:1.0.0]

Create an API from a WSDL document
  $ apic create:api --wsdl globalweather.wsdl
  Created globalweather.yaml API definition [globalweather.yaml:1.0.0]

Create an API using APIC's default OAuth 2 provider template
  $ apic create:api --title "OAuth2 Provider" --template oauth2
  Created oauth2-provider.yaml API definition [oauth2-provider:1.0.0]

Create an API using one of your templates
  $ apic config:set --global template-path="/etc/templates"
  $ ls /etc/templates
  proxy.hbs staging.hbs
  $ apic create:api --title "Proxy Provider" --template proxy
  Created proxy-provider.yaml API definition [proxy-provider:1.0.0]

Create an API using your default template
  $ apic config:set --global template-path="/etc/templates"
  $ ls /etc/templates
  proxy.hbs staging.hbs
  $ apic config:set --global template-default-api=staging
  $ apic create:api --title "Staging Provider"
  Created staging-provider.yaml API definition [staging-provider:1.0.0]

```


## Options

```
      --api_type string       The type of api (rest, wsdl-to-rest, or wsdl) (default "rest")
      --basepath string       basepath value (default derived from name)
      --disable_ws_security   Disable generation of WS-Security definitions in api
      --filename string       filename (default derived from name)
      --gateway-type string   The type of the gateway (datapower-gateway, datapower-api-gateway, event-gateway) (default "datapower-api-gateway")
  -h, --help                  Help for create:api
      --hostname string       host value (default $(catalog.host)
  -i, --interactive           use interactive mode
      --name string           x-ibm-name value (default derived from title)
      --product string        generate a product definition referencing the API
      --schemes string        list of schemes (valid options are http, https, ws and wss)
      --services string       service names separated by space
      --target-url string     target url
      --template string       use a provider template (if empty defaults to apic template)
      --title string          title value (required)
  -v, --version string        version value (default "1.0.0")
      --wsdl string           wsdl file to use as the source (required authentication via apic login)
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
