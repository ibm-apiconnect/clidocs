---
tags:
- "group: config"
---
# apic config:get

Get a configuration variable

## Synopsis

Configuration variables:

  catalog
    The catalog configuration variable should be set to the URI of an
    API Connect catalog.  The value of the catalog provides the default
    identity of a catalog for all the commands that are used to manage
    aspects of a catalog.  The default values defined by the catalog's
    URI can be overridden using the --server, --organization, and
    --catalog command line options.  The catalog URI has the form:
    https://MANAGEMENT_SERVER/consumer-api/catalogs/CONSUMER_ORG_NAME/CATALOG_NAME

  org
    The default value of org defined by the app's or catalog's URI can be
    set using the org URI.  The org URI has the form:
    https://MANAGEMENT_SERVER/consumer-api/orgs/CONSUMER_ORG_NAME

  space
    The space configuration variable should be set to the URI of an
    API Connect space.  The value of the space provides the default
    identity of a space for all the commands that are used to manage
    aspects of a space.  The default values defined by the spaces's
    URI can be overridden using the --server, --organization,
    --catalog, and --space command line options.  The space URI has the form:
    https://MANAGEMENT_SERVER/consumer-api/spaces/CONSUMER_ORG_NAME/CATALOG_NAME/SPACE_NAME

  cloud
    The cloud configuration variable should be set to the management
    server URI. The value of the cloud variable provides default
    server URI for cloud admin commands. It can be overridden using
    the --server and --mode command line options. The cloud URI has the form:
    https://MANAGEMENT_SERVER/consumer-api/

  mode
    The value of mode configruation variable defines the toolkit operation 
    mode. It can be overridden using the --mode command line option. 
    The value can be set to apim or consumer

  template-path
    List of places to look for handlebar templates

  template-default-api
    Defines the default api template

  template-default-product
    Defines the default product template


```
apic config:get NAME --mode consumer [flags]
```

## Examples

```
$ apic config:get catalog --mode consumer
catalog: https://mgmnthost.com/consumer-api/catalogs/climbon/sb

$ apic config:get org --mode consumer
org: https://mgmnthost.com/consumer-api/orgs/climbon

```


## Options

```
  -g, --global   list the global configuration variables
  -h, --help     Help for config:get
  -l, --local    list the local application configuration variables
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
