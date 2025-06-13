---
tags:
- "group: notification-styles"
- "scope: catalog"
- "scope: cloud"
- "scope: consumer"
- "scope: org"
---
# apic notification-styles:update

Notification Styles update operations

## Synopsis

Notification Styles update operations

```
apic notification-styles:update [flags]
```

## Possible Usages

```
apic notification-styles:update [flags] --scope org NOTIFICATION_STYLE_FILE
apic notification-styles:update [flags] --scope consumer NOTIFICATION_STYLE_FILE
apic notification-styles:update [flags] --scope cloud NOTIFICATION_STYLE_FILE
apic notification-styles:update [flags] --scope catalog NOTIFICATION_STYLE_FILE
```

## Request examples

-----------------------------------------------------------
#### Example of notification style update at catalog scope.
-----------------------------------------------------------

```
allowed_html_tags:
  a:
  - class
  - href
  - hreflang
  - style
  br:
  - class
  - style
  h1:
  - class
  - id
  - style
  p:
  - class
  - style
summary: An example notification style
title: Acme notification style
```

-------------------------------------------------------
#### Example of notification style update at org scope.
-------------------------------------------------------

```
allowed_html_tags:
  a:
  - class
  - href
  - hreflang
  - style
  br:
  - class
  - style
  h1:
  - class
  - id
  - style
  img:
  - class
  - src
  - alt
  - width
  - height
  - style
  p:
  - class
  - style
summary: An example notification style
title: Acme notification style
```

------------------------------------------------------------
#### Example of notification style update at consumer scope.
------------------------------------------------------------

```
allowed_html_tags:
  a:
  - class
  - href
  - hreflang
  - style
  br:
  - class
  - style
  h1:
  - class
  - id
  - style
  p:
  - class
  - style
summary: An example notification style
title: Acme notification style
```

-------------------------------------------------------
#### Example of notification style update at org scope.
-------------------------------------------------------

```
allowed_html_tags:
  a:
  - class
  - href
  - hreflang
  - style
  blockquote:
  - class
  - cite
  - style
  br:
  - class
  - style
  cite:
  - class
  - style
  code:
  - class
  - style
  h1:
  - class
  - id
  - style
  img:
  - class
  - src
  - alt
  - data-entity-type
  - data-entity-uuid
  - data-align
  - data-caption
  - width
  - height
  - style
  p:
  - class
  - style
  span:
  - class
  - style
  strong:
  - class
  - style
  table:
  - class
  - id
  - style
summary: An example notification style
title: Acme notification style
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for notification-styles:update
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
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
