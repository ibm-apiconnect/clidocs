# apic custom-theme:create-import

Create a task that imports an archive that contains the custom themes of a site.

## Synopsis

You can create a task to import an archive of the custom themes of a site. You can use the imported archive to quickly and simply override the custom themes for the specified site.

```
apic custom-theme:create-import --mode portaladmin [flags]
```

## Possible Usages

```
      apic custom-theme:create-import --mode portaladmin [flags] CUSTOM_THEME_FILE
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --no-poll          Do not poll the created task and just return the task ID
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string    management server endpoint (required)
      --wait             Wait on the cache to be rebuilt as part of the task, otherwise it will be rebuilt in the background after the task has finished.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
