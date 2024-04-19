# apic member-invitations:create

Member Invitations create operations

## Synopsis

Member Invitations create operations

```
apic member-invitations:create [flags]
```

## Possible Usages

```
      apic member-invitations:create [flags] --scope consumer-org --space-initiated MEMBER_INVITATION_FILE
      apic member-invitations:create [flags] --scope space MEMBER_INVITATION_FILE
      apic member-invitations:create [flags] --scope org MEMBER_INVITATION_FILE
      apic member-invitations:create [flags] --scope consumer-org MEMBER_INVITATION_FILE
      apic member-invitations:create [flags] --scope catalog MEMBER_INVITATION_FILE
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for member-invitations:create
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
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
