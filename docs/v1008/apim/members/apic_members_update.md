---
tags:
- "group: members"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic members:update

Members update operations

## Synopsis

Members update operations

```
apic members:update [flags]
```

## Possible Usages

```
apic members:update [flags] --scope consumer-org --space-initiated MEMBER MEMBER_FILE
apic members:update [flags] --scope space MEMBER MEMBER_FILE
apic members:update [flags] --scope org MEMBER MEMBER_FILE
apic members:update [flags] --scope consumer-org MEMBER MEMBER_FILE
apic members:update [flags] --scope catalog MEMBER MEMBER_FILE
```

## Request examples

-----------------------------------------------
#### Example of member update at catalog scope.
-----------------------------------------------

```
name: updated-acme-member
role_urls:
- https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/roles/role1
- https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/roles/role2
summary: An example member update
title: Updated ACME Member
```

----------------------------------------------------
#### Example of member update at consumer-org scope.
----------------------------------------------------

```
name: updated-acme-member
role_urls:
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org/roles/role1
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-consumer-org/roles/role1
summary: An example member update
title: Updated ACME Member
```

---------------------------------------------------------------
#### Example of member update at consumer-org(space-initiated).
---------------------------------------------------------------

```
name: updated-acme-member
role_urls:
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-space/acme-consumer-org/roles/role1
- https://acme-apim.example.com/api/consumer-orgs/acme-org/acme-catalog/acme-space/acme-consumer-org/roles/role1
summary: An example member update
title: Updated ACME Member
```

-------------------------------------------
#### Example of member update at org scope.
-------------------------------------------

```
name: updated-acme-member
role_urls:
- https://acme-apim.example.com/api/orgs/acme-org/roles/role1
- https://acme-apim.example.com/api/orgs/acme-org/roles/role2
summary: An example member update
title: Updated ACME Member
```

---------------------------------------------
#### Example of member update at space scope.
---------------------------------------------

```
name: updated-acme-member
role_urls:
- https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/roles/role1
- https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/roles/role1
summary: An example member update
title: Updated ACME Member
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for members:update
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
