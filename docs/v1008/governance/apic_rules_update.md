# apic rules:update

Update the Rule object by name and version

## Synopsis

Update the Rule object by name and version
          
          Fields not allowed:
          - name
          
          Fields allowed but ignored:
          - version
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic rules:update --mode governance [flags]
```

## Possible Usages

```
      apic rules:update --mode governance [flags] --id ID RULE_FILE
      apic rules:update --mode governance [flags] NAME:VERSION RULE_FILE
```

## Options

```
      --format string            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string               Organization name or id (required)
      --output string            Write file(s) to directory, instead of STDOUT (default "-")
      --ruleset string           Ruleset name or id (required)
      --ruleset_version string   Specify an explicit Ruleset version
  -s, --server string            management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
