---
tags:
- "group: events"
- "scope: org"
---
# apic events:orgGet

Get specific event at provider organization scope

## Synopsis

Return a single analytics API event by ID scoped to the provider organization. The item in the result set is determined by the passed in request query to this API. In this API, references to 'field' refer to the analytics API event fields documented here: https://www.ibm.com/docs/en/api-connect/10.0.x?topic=SSMNED_10.0.8/com.ibm.apic.apionprem.doc/rapim_analytics_apieventrecordfields.htm

```
apic events:orgGet --mode analytics [flags]
```

## Possible Usages

```

      apic events:orgGet --mode analytics [flags] ID

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --fields string              A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.

      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
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
