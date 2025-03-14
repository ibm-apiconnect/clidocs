---
tags:
- "group: rulesets"
---
# apic rulesets:get

Download the Ruleset object as a file to the current directory by name or id

## Synopsis

Download the Ruleset object as a file to the current directory by name or id

```
apic rulesets:get --mode governance [flags]
```

## Possible Usages

```
apic rulesets:get --mode governance [flags] RULESET
```

## Options

```
      --fields string            List of field names to return
      --format string            Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string               Organization name or id (required)
      --output string            Write file(s) to directory, use - for STDOUT. (default: cwd)
      --ruleset_version string   Specify an explicit Ruleset version
  -s, --server string            management server endpoint (required)
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
