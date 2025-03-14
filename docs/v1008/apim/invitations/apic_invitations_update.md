---
tags:
- "group: invitations"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic invitations:update

Invitations update operations

## Synopsis

Invitations update operations

```
apic invitations:update [flags]
```

## Possible Usages

```
apic invitations:update [flags] --scope consumer-org --space-initiated INVITATION INVITATION_FILE
apic invitations:update [flags] --scope space INVITATION INVITATION_FILE
apic invitations:update [flags] --scope org INVITATION INVITATION_FILE
apic invitations:update [flags] --scope consumer-org INVITATION INVITATION_FILE
apic invitations:update [flags] --scope catalog INVITATION INVITATION_FILE
```

## Request examples

---------------------------------------------------
#### Example of invitation update at catalog scope.
---------------------------------------------------

```
email: acme@example.com
summary: An example invitation update at catalog scope
title: Acme invitation
```

--------------------------------------------------------
#### Example of invitation update at consumer-org scope.
--------------------------------------------------------

```
email: acme@example.com
summary: An example invitation update at consumer-org scope
title: Acme invitation
```

-------------------------------------------------------------------------
#### Example of invitation update at consumer-org(space-initiated) scope.
-------------------------------------------------------------------------

```
email: acme@example.com
summary: An example invitation update at consumer-org(space-initiated) scope
title: Acme invitation
```

-----------------------------------------------
#### Example of invitation update at org scope.
-----------------------------------------------

```
email: acme@example.com
summary: An example invitation update at org scope
title: Acme invitation
```

-------------------------------------------------
#### Example of invitation update at space scope.
-------------------------------------------------

```
email: acme@example.com
summary: An example invitation update at space scope
title: Acme invitation
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for invitations:update
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
