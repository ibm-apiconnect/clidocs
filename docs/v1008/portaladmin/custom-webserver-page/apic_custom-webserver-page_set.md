---
tags:
- "group: custom-webserver-page"
---
# apic custom-webserver-page:set

Set a custom HTML page for a web server page type.

## Synopsis

Set the custom web server HTML content of a specific web server page (index, 404, 40x, 50x). Maximum size of 8 MB.

```
apic custom-webserver-page:set --mode portaladmin [flags]
```

## Possible Usages

```
apic custom-webserver-page:set --mode portaladmin [flags] CUSTOM_WEBSERVER_PAGE_FILE
```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --page_type string             The page type you want to run this command against. Values: index, 404, 40x, 50x (required)
      --portal_service_name string   The name of the Portal Service (required)
  -s, --server string                management server endpoint (required)
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
