# apic user:block

Block a Developer Portal Drupal User

## Synopsis

Block a Developer Portal Drupal User. This will block a Drupal User from being able to login into the Developer Portal. You need to provide the username of the Drupal User.

```
apic user:block --mode portaladmin [flags]
```

## Possible Usages

```
      apic user:block --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --names string     A comma-separated list of names of Drupal Users to perform the action on.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string    management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
