---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:catAliases

Retrieves the cluster's index aliases, including filter and routing information

## Synopsis

Retrieves the cluster's index aliases, including filter and routing information. The API does not return data stream aliases.

```
apic clustermgmt:catAliases --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:catAliases --mode analytics [flags]

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --h string                   Comma-separated list of column names to display.
      --help                       If true, the response includes help information.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
      --return_format string       Short version of the HTTP accept header. Valid values include JSON, YAML, etc.
      --s string                   Comma-separated list of column names or column aliases used to sort the response.
  -s, --server string              management server endpoint (required)
      --v_columns                  If true, the response includes column headings.
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
