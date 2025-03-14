---
tags:
- "group: notification-templates"
- "scope: catalog"
- "scope: cloud"
- "scope: org"
- "scope: space"
---
# apic notification-templates:update

Notification Templates update operations

## Synopsis

Notification Templates update operations

```
apic notification-templates:update [flags]
```

## Possible Usages

```
apic notification-templates:update [flags] --scope space --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope space --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection provider NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection catalog NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection admin NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection provider NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection cloud NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection catalog NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection admin NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope catalog --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope catalog --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope catalog --subcollection catalog NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
```

## Request examples

----------------------------------------------------------------------------------------
#### Example of notification template update at catalog scope and catalog subcollection.
----------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

-----------------------------------------------------------------------------------------
#### Example of notification template update at catalog scope and consumer subcollection.
-----------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

--------------------------------------------------------------------------------------
#### Example of notification template update at catalog scope and space subcollection.
--------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

--------------------------------------------------------------------------------------
#### Example of notification template update at cloud scope and catalog subcollection.
--------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

------------------------------------------------------------------------------------
#### Example of notification template update at cloud scope and admin subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

------------------------------------------------------------------------------------
#### Example of notification template update at cloud scope and cloud subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

---------------------------------------------------------------------------------------
#### Example of notification template update at cloud scope and consumer subcollection.
---------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

---------------------------------------------------------------------------------------
#### Example of notification template update at cloud scope and provider subcollection.
---------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

------------------------------------------------------------------------------------
#### Example of notification template update at cloud scope and space subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

------------------------------------------------------------------------------------
#### Example of notification template update at org scope and catalog subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

----------------------------------------------------------------------------------
#### Example of notification template update at org scope and admin subcollection.
----------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

-------------------------------------------------------------------------------------
#### Example of notification template update at org scope and consumer subcollection.
-------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

-------------------------------------------------------------------------------------
#### Example of notification template update at org scope and provider subcollection.
-------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

----------------------------------------------------------------------------------
#### Example of notification template update at org scope and space subcollection.
----------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

---------------------------------------------------------------------------------------
#### Example of notification template update at space scope and consumer subcollection.
---------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

------------------------------------------------------------------------------------
#### Example of notification template update at space scope and space subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
subject: Invitation to join Acme
title: Acme notification template
```

## Options

```
  -c, --catalog string         Catalog name or id (required)
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for notification-templates:update
  -o, --org string             Organization name or id (required)
      --output string          Write file(s) to directory, instead of STDOUT (default "-")
      --scope string           scope
  -s, --server string          management server endpoint (required)
      --space string           Space name or id (required)
      --subcollection string   subcollection
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
