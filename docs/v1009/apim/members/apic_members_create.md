---
tags:
- "group: members"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic members:create

Members create operations

## Synopsis

Members create operations

```
apic members:create [flags]
```

## Possible Usages

```
apic members:create [flags] --scope consumer-org --space-initiated MEMBER_FILE
apic members:create [flags] --scope space MEMBER_FILE
apic members:create [flags] --scope org MEMBER_FILE
apic members:create [flags] --scope consumer-org MEMBER_FILE
apic members:create [flags] --scope catalog MEMBER_FILE
```

## Request examples

-----------------------------------------------
#### Example of member create at catalog scope.
-----------------------------------------------

```
name: acme-member
role_urls:
- https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/roles/role1
- https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/roles/role1
summary: An example member create
title: ACME Member
user:
  url: https://acme-apim.example.com/api/user-registries/acme-org/acme-user-registry1/users/acme-user
```

----------------------------------------------------
#### Example of member create at consumer-org scope.
----------------------------------------------------

```
name: acme-member
role_urls:
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org/roles/role1
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org/roles/role2
summary: An example member create
title: ACME Member
user:
  url: https://acme-apim.example.com/api/user-registries/acme-org/acme-user-registry1/users/acme-user
```

---------------------------------------------------------------------
#### Example of member create at consumer-org(space-initiated) scope.
---------------------------------------------------------------------

```
name: acme-member
role_urls:
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-space/acme-consumer-org/roles/role1
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-space/acme-consumer-org/roles/role1
summary: An example member create
title: ACME Member
user:
  url: https://acme-apim.example.com/api/user-registries/acme-org/acme-user-registry1/users/acme-user
```

-------------------------------------------
#### Example of member create at org scope.
-------------------------------------------

```
name: acme-member
role_urls:
- https://acme-apim.example.com/api/orgs/acme-org/roles/role1
- https://acme-apim.example.com/api/orgs/acme-org/roles/role2
summary: An example member create
title: ACME Member
user:
  url: https://acme-apim.example.com/api/user-registries/acme-org/acme-user-registry1/users/acme-user
```

---------------------------------------------
#### Example of member create at space scope.
---------------------------------------------

```
name: acme-member
role_urls:
- https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/roles/role1
- https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/roles/role2
summary: An example member create
title: ACME Member
user:
  url: https://acme-apim.example.com/api/user-registries/acme-org/acme-user-registry1/users/acme-user
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for members:create
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
      --scope string          scope
  -s, --server string         management server endpoint (required)
      --space string          Space name or id (required)
      --space-initiated       space-initiated
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
