# apic content:create-import

Create a task that imports an archive of site content.

## Synopsis

Creates a task that imports an archive of site content. The status of this task can be tracked with the /content/TASK_ID/status route. Depending on your site's content please be advised that an import can take a long time to complete. If called via the toolkit CLI, it will automatically poll the response every 30 seconds up to 25 minutes.

```
apic content:create-import --mode portaladmin [flags]
```

## Possible Usages

```
      apic content:create-import --mode portaladmin [flags] CONTENT_FILE
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --no-poll          Do not poll the created task and just return the task ID
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
