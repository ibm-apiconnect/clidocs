# apic modules:delete

Deletes one or more modules.

## Synopsis

Deletes one or more modules. The provided list of modules must be comma-separated. Running this command with the force option will make sure the Drupal table's are purged of any reference to the module.

```
apic modules:delete --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --force            Provides the force flag to the subsequent command. The force action is dependent on the command. Please read the command description.
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for modules:delete
      --modules string   A list of modules separated by a comma. (required)
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
