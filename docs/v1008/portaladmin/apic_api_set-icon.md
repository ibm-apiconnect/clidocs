# apic api:set-icon

Set an icon image for the given api.

## Synopsis

Set an icon image for a api within the developer portal of the provided org and catalog. The existing icon will be overwritten. The id or name:version of a specific api needs to be provided. e.g. 'id-of-api-called-example-3' or 'example:3.0.0'.

```
apic api:set-icon --mode portaladmin [flags]
```

## Possible Usages

```
      apic api:set-icon --mode portaladmin [flags] API API_FILE
```

## Options

```
  -c, --catalog string            Name or ID of the Catalog that the site belongs to. (required)
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --icon_description string   A description of the icon to be displayed to users. Used as alt text for the image. (required)
  -o, --org string                Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string             management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
