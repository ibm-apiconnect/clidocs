# apic site-config:delete-import

Cancels a running site configuration import task.

## Synopsis

Cancels the site configuration import task and deletes any generated artifacts.

```
apic site-config:delete-import --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for site-config:delete-import
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string    management server endpoint (required)
      --task_id string   ID of the task created on the queue. (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```