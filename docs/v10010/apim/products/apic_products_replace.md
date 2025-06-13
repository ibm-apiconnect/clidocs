---
tags:
- "group: products"
---
# apic products:replace

Products replace operations

## Synopsis

Products replace operations 

#### Create a mapping file

if you are replacing a Product, the mapping file specifies the Product that you want to replace, and the mapping of the Plans from the source Product to the target Product.

The PRODUCT_PLAN_MAPPING_FILE takes the following form:
```

product_url: https:/server/api/catalogs/{id}/products/{id}
plans:
- source: {source_plan_name_1}
  target: {target_plan_name_1}
- source: {source_plan_name_2}
  target: {target_plan_name_2}
			.
			.
			.
```
 #### `Hot-replace` version 1.0.0 with 1.0.1
```
apic products:replace climbon:1.0.1 PRODUCT_PLAN_MAPPING_FILE
```
The Product specified on the command line is the replacement Product. For example, if you are replacing climbon:1.0.0 with climbon:1.0.1 then the Product specified on the command line is climbon:1.0.1, and the product_url property inside the plan mapping file specifies the URL of climbon:1.0.0.

```
apic products:replace [flags]
```

## Possible Usages

```
apic products:replace [flags] --id --scope space ID PRODUCT_PLAN_MAPPING_FILE
apic products:replace [flags] --id --scope catalog ID PRODUCT_PLAN_MAPPING_FILE
apic products:replace [flags] --scope space NAME:VERSION PRODUCT_PLAN_MAPPING_FILE
apic products:replace [flags] --scope catalog NAME:VERSION PRODUCT_PLAN_MAPPING_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:replace
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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
