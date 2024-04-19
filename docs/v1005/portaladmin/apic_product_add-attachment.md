# apic product:add-attachment

Add an attachment for the given product.

## Synopsis

Add an attachment for a product within the developer portal of the provided org and catalog. A product can hold 10 attachments. The id or name:version of a specific product needs to be provided. e.g. 'id-of-product-called-example-3' or 'example:3.0.0'.

```
apic product:add-attachment --mode portaladmin [flags]
```

## Options

```
      --attachment_description string   A description of the attachment to be displayed to users.
      --attachment_name string          The name given to the attachment once it has been uploaded e.g. my-file.txt (required)
  -c, --catalog string                  Name or ID of the Catalog that the site belongs to. (required)
      --format string                   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                            Help for product:add-attachment
  -o, --org string                      Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string                   management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
