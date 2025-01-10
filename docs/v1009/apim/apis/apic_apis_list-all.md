---
tags:
- "group: apis"
- "scope: catalog"
- "scope: space"
---
# apic apis:list-all

Apis list-all operations

## Synopsis

Apis list-all operations

```
apic apis:list-all [flags]
```

## Possible Usages

```
apic apis:list-all [flags] --scope space
apic apis:list-all [flags] --scope catalog
```

## Options

```
      --api_type string           The type of api (asyncapi, rest, graphql, wsdl_to_rest, or wsdl)
      --base_path string          Base path of the API
  -c, --catalog string            Catalog name or id (required)
      --consumer_org_url string   Consumer Org Url
      --enforced                  Whether the API is enforced or not
      --expand string             List of transient field to expand
      --fields string             List of field names to return
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                      Help for apis:list-all
      --limit int32               Maximum number of items to return
      --metadata string           List of metadata fields in the api to filter on
      --offset int32              Offset item number from list to begin return
  -o, --org string                Organization name or id (required)
      --output string             Write file(s) to directory, instead of STDOUT (default "-")
      --scope string              scope
  -s, --server string             management server endpoint (required)
      --space string              Space name or id (required)
      --states string             The list states of the queried resources
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
