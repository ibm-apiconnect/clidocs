---
tags:
- "group: create"
---
# apic create:product

Create a product definition

## Synopsis

Create a product definition

```
apic create:product [flags]
```

## Examples

```
Create a product
  $ apic create:product --title "Climb On"
  Created climb-on.yaml product definition [climb-on:1.0.0]
Create a product interactively
  $ apic create:product
  ? Title: Climb On
  ? Name: climb-on
  ? File: climb-on.yaml
  ? Template:
  ? API Files:
  Created climb-on.yaml product definition [climb-on:1.0.0]
Create a product referencing existing APIs
  $ apic create:product --title "Climb On" --apis "routes.yaml ascents.yaml"
  Created climb-on.yaml product definition [climb-on:1.0.0]
Create an product using one of your templates
  $ apic config:set --global template-path="/etc/templates"
  $ ls /etc/templates
  proxy-product.hbs staging-product.hbs
  $ apic create:product --title "Proxy Product" --template proxy
  Created proxy-product.yaml product definition [proxy-product:1.0.0]
Create a product using your default template
  $ apic config:set --global template-path="/etc/templates"
  $ ls /etc/templates
  proxy-product.hbs staging-product.hbs
  $ apic config:set --global template-default-product=staging
  $ apic create:product --title "Staging Product"
  Created staging-product.yaml product definition [staging-product:1.0.0]

```

## Options

```
      --apis string           api file names separated by a space
      --filename string       filename (default derived from name)
      --gateway-type string   The type of the gateway (datapower-gateway, datapower-api-gateway, event-gateway) (default "datapower-api-gateway")
  -h, --help                  Help for create:product
  -i, --interactive           use interactive mode
      --name string           x-ibm-name value (default derived from title)
      --template string       use a provider template (if empty defaults to apic template)
      --title string          title value (required)
  -v, --version string        version value (default "1.0.0")
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
