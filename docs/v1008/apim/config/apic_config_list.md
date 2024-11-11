---
tags:
- "group: config"
---
# apic config:list

List the application and global configuration variables

## Synopsis

Configuration variables:

  catalog
    The catalog configuration variable should be set to the URI of an
    API Connect catalog.  The value of the catalog provides the default
    identity of a catalog for all the commands that are used to manage
    aspects of a catalog.  The default values defined by the catalog's
    URI can be overridden using the --server, --organization, and
    --catalog command line options.  The catalog URI has the form:
    https://MANAGEMENT_SERVER/api/catalogs/ORGANIZATION_NAME/CATALOG_NAME

  org
    The default value of org defined by the app's or catalog's URI can be
    set using the org URI.  The org URI has the form:
    https://MANAGEMENT_SERVER/api/orgs/ORGANIZATION_NAME

  space
    The space configuration variable should be set to the URI of an
    API Connect space.  The value of the space provides the default
    identity of a space for all the commands that are used to manage
    aspects of a space.  The default values defined by the spaces's
    URI can be overridden using the --server, --organization,
    --catalog, and --space command line options.  The space URI has the form:
    https://MANAGEMENT_SERVER/api/spaces/ORGANIZATION_NAME/CATALOG_NAME/SPACE_NAME

  consumer
    The consumer configuration variable should be set to the URI of an API
    Connect consumer.  The value of the consumer-org provides the default
    identity of a consumer. The default values defined by the consumer URI
    can be overridden using the --server, --organization, --catalog, and
    --consumer command line options.  The consumer URI has the form:
    https://MANAGEMENT_SERVER/api/consumer-orgs/ORGANIZATION_NAME/CATALOG_NAME/CONSUMER_ORG_NAME

  cloud
    The cloud configuration variable should be set to the management
    server URI. The value of the cloud variable provides default
    server URI for cloud admin commands. It can be overridden using
    the --server and --mode command line options. The cloud URI has the form:
    https://MANAGEMENT_SERVER/api/

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
apic config:list [flags]
```

## Examples

```
$ apic config
catalog: https://mgmnthost.com/api/catalogs/climbon/sb
org: https://mgmnthost.com/api/orgs/climbon

$ apic config --global
catalog: https://mgmnthost.com/api/catlogs/climbon/sb

```

## Options

```
  -g, --global   list the global configuration variables
  -h, --help     Help for config:list
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
