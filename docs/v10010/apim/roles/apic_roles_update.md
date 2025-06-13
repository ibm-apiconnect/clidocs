---
tags:
- "group: roles"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic roles:update

Roles update operations

## Synopsis

Roles update operations

```
apic roles:update [flags]
```

## Possible Usages

```
apic roles:update [flags] --scope space ROLE ROLE_FILE
apic roles:update [flags] --scope org ROLE ROLE_FILE
apic roles:update [flags] --scope catalog ROLE ROLE_FILE
```

## Request examples

---------------------------------------------
#### Example of role update at catalog scope.
---------------------------------------------

```
external_group_mapping:
  ldap_groups:
  - cn=CloudAdmins,ou=groups,dc=apic,dc=com
  user_group_filter_prefix: (&(uniquemember=
  user_group_filter_suffix: )(objectClass=groupOfUniqueNames))
  user_registry_url: https://acme-apim.example.com/api/user-registries/org1/user-registry-1
permission_urls:
- https://acme-apim.example.com/api/cloud/permissions/org/member:view
- https://acme-apim.example.com/api/cloud/permissions/org/member:manage
summary: An example role update
title: Acme role update
```

-----------------------------------------
#### Example of role update at org scope.
-----------------------------------------

```
external_group_mapping:
  ldap_groups:
  - cn=CloudAdmins,ou=groups,dc=apic,dc=com
  user_group_filter_prefix: (&(uniquemember=
  user_group_filter_suffix: )(objectClass=groupOfUniqueNames))
  user_registry_url: https://acme-apim.example.com/api/user-registries/org1/user-registry-1
permission_urls:
- https://acme-apim.example.com/api/cloud/permissions/cloud/analytics:view
- https://acme-apim.example.com/api/cloud/permissions/org/member:view
- https://acme-apim.example.com/api/cloud/permissions/org/member:manage
summary: An example role update
title: Acme role update
```

-------------------------------------------
#### Example of role update at space scope.
-------------------------------------------

```
external_group_mapping:
  ldap_groups:
  - cn=CloudAdmins,ou=groups,dc=apic,dc=com
  user_group_filter_prefix: (&(uniquemember=
  user_group_filter_suffix: )(objectClass=groupOfUniqueNames))
  user_registry_url: https://acme-apim.example.com/api/user-registries/org1/user-registry-1
permission_urls:
- https://acme-apim.example.com/api/cloud/permissions/org/member:view
- https://acme-apim.example.com/api/cloud/permissions/org/member:manage
summary: An example role update
title: Acme role update
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for roles:update
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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
