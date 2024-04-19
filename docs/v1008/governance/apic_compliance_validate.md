# apic compliance:validate

Validate an OpenAPI Document

## Synopsis

Validate a Single OpenAPI Document with a specified list of Spectral Rulesets.
If no rulesets are provided, spectral-oas and spectral-owasp Global Rulesets will be used for an OpenAPI document, whereas for an AsyncAPI document, the spectral-async Global Ruleset will be used.

```
apic compliance:validate --mode governance [flags]
```

## Possible Usages

```
      apic compliance:validate --mode governance [flags] COMPLIANCE_REQUEST_FILE
```

## Options

```
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --rulesets string   Define one or more rulesets to be used by providing the name in the format rulesetName1,rulesetName2 with no spaces when separating names by comma. If one ruleset name is mentioned no comma should be used.
  -s, --server string     management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
