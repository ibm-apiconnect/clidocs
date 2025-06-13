---
tags:
- "group: global-policy-posthooks"
- "scope: catalog"
- "scope: space"
---
# apic global-policy-posthooks:create

Global Policy Posthooks create operations

## Synopsis

Global Policy Posthooks create operations

```
apic global-policy-posthooks:create [flags]
```

## Possible Usages

```
apic global-policy-posthooks:create [flags] --scope space GLOBAL_POLICY_POSTHOOK_FILE
apic global-policy-posthooks:create [flags] --scope catalog GLOBAL_POLICY_POSTHOOK_FILE
```

## Request examples

------------------------------------------------------------------
#### Example of global policy posthooks creation at catalog scope.
------------------------------------------------------------------

```
global_policy_url: https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id
name: acme
scope: catalog
summary: An example global policy posthooks creation
title: Acme Global policy posthooks creation
```

----------------------------------------------------------------
#### Example of global policy posthooks creation at space scope.
----------------------------------------------------------------

```
global_policy_url: https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id
name: acme
scope: space
summary: An example global policy error creation
title: Acme Global policy error creation
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for global-policy-posthooks:create
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
