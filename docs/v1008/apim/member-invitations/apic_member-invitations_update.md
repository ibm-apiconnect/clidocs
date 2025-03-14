---
tags:
- "group: member-invitations"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic member-invitations:update

Member Invitations update operations

## Synopsis

Member Invitations update operations

```
apic member-invitations:update [flags]
```

## Possible Usages

```
apic member-invitations:update [flags] --scope consumer-org --space-initiated MEMBER_INVITATION MEMBER_INVITATION_FILE
apic member-invitations:update [flags] --scope space MEMBER_INVITATION MEMBER_INVITATION_FILE
apic member-invitations:update [flags] --scope org MEMBER_INVITATION MEMBER_INVITATION_FILE
apic member-invitations:update [flags] --scope consumer-org MEMBER_INVITATION MEMBER_INVITATION_FILE
apic member-invitations:update [flags] --scope catalog MEMBER_INVITATION MEMBER_INVITATION_FILE
```

## Request examples

----------------------------------------------------------
#### Example of member invitation update at catalog scope.
----------------------------------------------------------

```
email: acme1@example.com
role_urls:
- https://acme-apim.example.com/api/catalogs/org/catalog1/roles/role1
- https://acme-apim.example.com/api/catalogs/org/catalog1/roles/role2
summary: An example member invitation update
title: Acme member invitation update
```

---------------------------------------------------------------
#### Example of member invitation update at consumer-org scope.
---------------------------------------------------------------

```
email: acme1@example.com
role_urls:
- https://acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org1/roles/role3
- https://acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org1/roles/role4
summary: An example member invitation update
title: Acme member invitation update
```

--------------------------------------------------------------------------------
#### Example of member invitation update at consumer-org(space initiated) scope.
--------------------------------------------------------------------------------

```
email: acme1@example.com
role_urls:
- https://acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org1/roles/role1
- https://acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org1/roles/role2
summary: An example member invitation update
title: Acme member invitation update
```

------------------------------------------------------
#### Example of member invitation update at org scope.
------------------------------------------------------

```
email: acme1@example.com
role_urls:
- https://acme-apim.example.com/api/orgs/org1/roles/role1
- https://acme-apim.example.com/api/orgs/org1/roles/role2
summary: An example member invitation update
title: Acme member invitation update
```

--------------------------------------------------------
#### Example of member invitation update at space scope.
--------------------------------------------------------

```
email: acme1@example.com
role_urls:
- https://acme-apim.example.com/api/spaces/org1/catalog1/space1/roles/role2
- https://acme-apim.example.com/api/spaces/org1/catalog1/space1/roles/role3
summary: An example member invitation update
title: Acme member invitation update
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for member-invitations:update
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
