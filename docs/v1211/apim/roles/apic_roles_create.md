---
tags:
- "group: roles"
- "scope: org"
---
# apic roles:create

Roles create operations

## Synopsis

Roles create operations

```
apic roles:create [flags]
```

## Possible Usages

```
apic roles:create [flags] --scope org ROLE_FILE
```

## Request examples

-------------------------------------------------------------------------------
#### Example of role creation at org scope with external_group_mapping enabled.
-------------------------------------------------------------------------------

```
external_group_mapping:
  ldap_groups:
  - cn=CloudAdmins,ou=groups,dc=apic,dc=com
  user_group_filter_prefix: (&(uniquemember=
  user_group_filter_suffix: )(objectClass=groupOfUniqueNames))
  user_registry_url: https://acme-apim.example.com/api/user-registries/org1/user-registry-1
name: acme-role
permission_urls:
- https://acme-apim.example.com/api/cloud/permissions/cloud/analytics:view
- https://acme-apim.example.com/api/cloud/permissions/org/member:view
summary: An example role
title: Acme role
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for roles:create
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
      --scope string    scope
  -s, --server string   management server endpoint (required)
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
