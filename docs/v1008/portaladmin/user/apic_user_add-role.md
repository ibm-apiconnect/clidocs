---
tags:
- "group: user"
---
# apic user:add-role

Add a singular or multiple roles to the specified Drupal User accounts.

## Synopsis

Add a singular or multiple roles to the specified Drupal User accounts. You need to provide either the mail, username, or the UID of the Drupal User account.

```
apic user:add-role --mode portaladmin [flags]
```

## Possible Usages

```

      apic user:add-role --mode portaladmin [flags]

```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --mail string      A comma-separated list of Drupal User Email addresses to perform the action on.
      --names string     A comma-separated list of names of Drupal Users to perform the action on.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
      --role string      The name of the Drupal User Role. (required)
  -s, --server string    management server endpoint (required)
      --uid string       A comma-separated list of UIDs of Drupal Users to perform the action on.
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
