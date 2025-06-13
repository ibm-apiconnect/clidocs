---
tags:
- "group: invitations"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic invitations:create

Invitations create operations

## Synopsis

Invitations create operations

```
apic invitations:create [flags]
```

## Possible Usages

```
apic invitations:create [flags] --scope consumer-org --space-initiated INVITATION_FILE
apic invitations:create [flags] --scope space INVITATION_FILE
apic invitations:create [flags] --scope org INVITATION_FILE
apic invitations:create [flags] --scope consumer-org INVITATION_FILE
apic invitations:create [flags] --scope catalog INVITATION_FILE
```

## Request examples

-----------------------------------------------------
#### Example of invitation creation at catalog scope.
-----------------------------------------------------

```
email: acme@example.com
name: acme-invitation
notify: true
summary: An example invitation creation at catalog scope
title: Acme invitation
```

----------------------------------------------------------
#### Example of invitation creation at consumer-org scope.
----------------------------------------------------------

```
email: acme@example.com
name: acme-invitation
notify: true
summary: An example invitation creation at consumer-org scope
title: Acme invitation
```

---------------------------------------------------------------------------
#### Example of invitation creation at consumer-org(space-initiated) scope.
---------------------------------------------------------------------------

```
email: acme@example.com
name: acme-invitation
notify: true
summary: An example invitation creation at consumer-org(space-initiated) scope
title: Acme invitation
```

-------------------------------------------------
#### Example of invitation creation at org scope.
-------------------------------------------------

```
email: acme@example.com
name: acme-invitation
notify: true
summary: An example invitation creation at org scope
title: Acme invitation
```

---------------------------------------------------
#### Example of invitation creation at space scope.
---------------------------------------------------

```
email: acme@example.com
name: acme-invitation
notify: true
summary: An example invitation creation at space scope
title: Acme invitation
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for invitations:create
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --scope string      scope
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
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
