# apic compliance:validate_all

Validate Draft APIs within a Provider Organization using a Configuration File

## Synopsis

Validate one or more Draft APIs within a Provider Organization, using a Configuration File which contains the URLs of the Draft APIs to validate and the Rulesets to use.

```
apic compliance:validate_all --mode governance [flags]
```

## Possible Usages

```
      apic compliance:validate_all --mode governance [flags] COMPLIANCE_REQUEST_FILE
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
