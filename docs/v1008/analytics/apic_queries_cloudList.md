# apic queries:cloudList

List saved queries at cloud scope

## Synopsis

List saved queries owned by the user making the request, at cloud scope.

```
apic queries:cloudList --mode analytics [flags]
```

## Possible Usages

```
      apic queries:cloudList --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit string               If set, the number of items to return when requesting a list. Maximum: 500
      --offset string              If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --search string              Search for a saved query by either title, description or query_string.
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
