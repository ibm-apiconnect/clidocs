# apic role:list

Display a list of all roles defined on the system. If a role name is provided as an argument, then all of the permissions of that role will be listed. If a permission name is provided as an option, then all of the roles that have been granted that permission will be listed.

## Synopsis

Display a list of all roles defined on the system. If a role name is provided as an argument, then all of the permissions of that role will be listed. If a permission name is provided as an option, then all of the roles that have been granted that permission will be listed.

```
apic role:list --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string                Name or ID of the Catalog that the site belongs to. (required)
      --filter_by_permission string   Limits the list of roles to only those that have been assigned the specified permission. May not be specified if a role argument is provided.
      --format string                 Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                          Help for role:list
  -o, --org string                    Name or ID of the organization that the catalog belongs to. (required)
      --role string                   The name of the Drupal User Role.
  -s, --server string                 management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
