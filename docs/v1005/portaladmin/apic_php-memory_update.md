# apic php-memory:update

Set the PHP memory limit on the portal platform.

## Synopsis

Sets the PHP memory limit on the portal platform for both admin and web containers

```
apic php-memory:update --mode portaladmin [flags]
```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                         Help for php-memory:update
      --memory_value string          The memory value in megabytes (mb) (required)
      --portal_service_name string   The name of the Portal Service (required)
  -s, --server string                management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
