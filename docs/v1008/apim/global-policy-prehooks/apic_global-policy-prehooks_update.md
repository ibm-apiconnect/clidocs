---
tags:
- "group: global-policy-prehooks"
- "scope: catalog"
- "scope: space"
---
# apic global-policy-prehooks:update

Global Policy Prehooks update operations

## Synopsis

Global Policy Prehooks update operations

```
apic global-policy-prehooks:update [flags]
```

## Possible Usages

```
apic global-policy-prehooks:update [flags] --scope space GLOBAL_POLICY_PREHOOK_FILE
apic global-policy-prehooks:update [flags] --scope catalog GLOBAL_POLICY_PREHOOK_FILE
```

## Request examples

---------------------------------------------------------------
#### Example of global policy prehooks update at catalog scope.
---------------------------------------------------------------

```
global_policy_url: https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id
summary: An example global policy prehooks update
title: Acme Global policy prehooks update
```

----------------------------------------------------------
#### Example of global policy error update at space scope.
----------------------------------------------------------

```
global_policy_url: https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id
summary: An example global policy prehooks update
title: Acme Global policy prehooks update
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for global-policy-prehooks:update
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                        scope
  -s, --server string                       management server endpoint (required)
      --space string                        Space name or id (required)
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
