# apic clustermgmt:getIngestionReloadsNodeStats

Runtime stats about config reload successes and failures

## Synopsis

Provides runtime stats about config reload successes and failures.

```
apic clustermgmt:getIngestionReloadsNodeStats --mode analytics [flags]
```

## Possible Usages

```
      apic clustermgmt:getIngestionReloadsNodeStats --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
      --return_format string       Short version of the HTTP accept header. Valid values include JSON, YAML, etc.
  -s, --server string              management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
