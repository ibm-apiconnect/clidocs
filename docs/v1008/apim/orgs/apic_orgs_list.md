---
tags:
- "group: orgs"
---
# apic orgs:list

List the Organization objects

## Synopsis

List the Organization objects

```
apic orgs:list [flags]
```

## Possible Usages

```

      apic orgs:list [flags] --my
      apic orgs:list [flags]

```

## Options

```
      --expand string     List of transient field to expand
      --fields string     List of field names to return
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32       Maximum number of items to return
      --offset int32      Offset item number from list to begin return
      --org_type string   Type of orgs to return
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string     management server endpoint (required)
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
