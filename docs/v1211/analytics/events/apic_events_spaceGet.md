---
tags:
- "group: events"
- "scope: space"
---
# apic events:spaceGet

Get specific event at space scope

## Synopsis

Return a single analytics API event by ID scoped to the space. The item in the result set is determined by the passed in request query to this API. In this API, references to 'field' refer to the analytics API event fields documented here: https://www.ibm.com/docs/SSMNED_12.1.x_cd/com.ibm.apic.analytics.doc/api_event_records_fields.html

```
apic events:spaceGet --mode analytics [flags]
```

## Possible Usages

```
apic events:spaceGet --mode analytics [flags] ID
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --ai_insights                If set to true, enables AI-powered insights and analysis in the dashboard and discover response. This parameter requires the API agent feature to be enabled in the service configuration. When enabled, the report may include additional AI-generated recommendations and patterns.
                                   
      --analytics-service string   Analytics service name or ID. (required)
  -c, --catalog string             Catalog name or ID. (required)
      --fields string              A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.
                                   
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --space string               Space name or ID. (required)
      --timezone string            Convert date-time fields to the specified timezone using values from the Olson database (e.g. Europe/Paris or America/Los Angeles). Default if omitted is UTC.
```

## Options inherited from parent commands

```
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```
