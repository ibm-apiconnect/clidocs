---
tags:
- "group: user-group-role-assignments"
- "scope: org"
---
# apic user-group-role-assignments:update

User Group Role Assignments update operations

## Synopsis

User Group Role Assignments update operations

```
apic user-group-role-assignments:update [flags]
```

## Possible Usages

```
apic user-group-role-assignments:update [flags] --scope org USER_GROUP_ROLE_ASSIGNMENT USER_GROUP_ROLE_ASSIGNMENT_FILE
```

## Request examples

--------------------------------------------------
#### Example for user-group role assignment update
--------------------------------------------------

```
role_urls:
- https://acme-apim.example.com/api/orgs/alpha/roles/admin
summary: |
  Assigns administrator-level permissions to the Acme user group
  within the organization.
title: Admin Role for Acme Team
user_group_url: https://acme-apim.example.com/api/orgs/org1/user-groups/usergroup1
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for user-group-role-assignments:update
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
