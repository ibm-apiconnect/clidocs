---
tags:
- "group: notification-languages"
- "scope: catalog"
- "scope: cloud"
- "scope: org"
- "scope: space"
---
# apic notification-languages:update

Notification Languages update operations

## Synopsis

Notification Languages update operations

```
apic notification-languages:update [flags]
```

## Possible Usages

```
apic notification-languages:update [flags] --scope space --subcollection space NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope space --subcollection consumer NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope org --subcollection space NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope org --subcollection provider NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope org --subcollection consumer NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope org --subcollection catalog NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope org --subcollection admin NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope cloud --subcollection space NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope cloud --subcollection provider NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope cloud --subcollection consumer NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope cloud --subcollection cloud NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope cloud --subcollection catalog NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope cloud --subcollection admin NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope catalog --subcollection space NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope catalog --subcollection consumer NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
apic notification-languages:update [flags] --scope catalog --subcollection catalog NOTIFICATION_LANGUAGE NOTIFICATION_LANGUAGE_FILE
```

## Request examples

----------------------------------------------------------------------------------------
#### Example of notification language update at catalog scope and catalog subcollection.
----------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: catalog
subject: Invitation to join Acme
title: Example notification language update
```

-----------------------------------------------------------------------------------------
#### Example of notification language update at catalog scope and consumer subcollection.
-----------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: consumer
subject: Invitation to join Acme
title: Example notification language update
```

--------------------------------------------------------------------------------------
#### Example of notification language update at catalog scope and space subcollection.
--------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: space
subject: Invitation to join Acme
title: Example notification language update
```

--------------------------------------------------------------------------------------
#### Example of notification language update at cloud scope and catalog subcollection.
--------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: catalog
subject: Invitation to join Acme
title: Example notification language update
```

------------------------------------------------------------------------------------
#### Example of notification language update at cloud scope and admin subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: member-invitation
notification_template_type: admin
subject: Invitation to an admin organization in IBM API Connect
title: Example notification language update
```

------------------------------------------------------------------------------------
#### Example of notification language update at cloud scope and cloud subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: consumer
subject: Invitation to create an API consumer organization in the Acme catalog
title: Example notification language update
```

---------------------------------------------------------------------------------------
#### Example of notification language update at cloud scope and consumer subcollection.
---------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: consumer
subject: Invitation to join Acme
title: Example notification language update
```

---------------------------------------------------------------------------------------
#### Example of notification language update at cloud scope and provider subcollection.
---------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: provider
subject: Invitation to create an API provider organization in IBM API Connect
title: Example notification language update
```

------------------------------------------------------------------------------------
#### Example of notification language update at cloud scope and space subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: space
subject: Invitation to join Acme
title: Example notification language update
```

------------------------------------------------------------------------------------
#### Example of notification language update at org scope and catalog subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: catalog
subject: Invitation to join Acme
title: Example notification language update
```

----------------------------------------------------------------------------------
#### Example of notification language update at org scope and admin subcollection.
----------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: admin
subject: Invitation to join Acme
title: Example notification language update
```

-------------------------------------------------------------------------------------
#### Example of notification language update at org scope and consumer subcollection.
-------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: consumer
subject: Invitation to join Acme
title: Example notification language update
```

-------------------------------------------------------------------------------------
#### Example of notification language update at org scope and provider subcollection.
-------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: provider
subject: Invitation to join Acme
title: Example notification language update
```

----------------------------------------------------------------------------------
#### Example of notification language update at org scope and space subcollection.
----------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: space
subject: Invitation to join Acme
title: Example notification language update
```

---------------------------------------------------------------------------------------
#### Example of notification language update at space scope and consumer subcollection.
---------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: consumer
subject: Invitation to join Acme
title: Example notification language update
```

------------------------------------------------------------------------------------
#### Example of notification language update at space scope and space subcollection.
------------------------------------------------------------------------------------

```
body: |
  Hello, You have been invited to join Acme. This invitation provides access to collaborate and manage resources within the platform.
body_html: Hello,<br><br>You have been invited to join Acme. This invitation provides
  access to collaborate and manage resources within the platform.<br><br>
content_type:
- text
- html
notification_template_name: invitation
notification_template_type: space
subject: Invitation to join Acme
title: Example notification language update
```

## Options

```
  -c, --catalog string                 Catalog name or id (required)
      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                           Help for notification-languages:update
      --notification-template string   Notification Template name or id (required)
  -o, --org string                     Organization name or id (required)
      --output string                  Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                   scope
  -s, --server string                  management server endpoint (required)
      --space string                   Space name or id (required)
      --subcollection string           subcollection
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
