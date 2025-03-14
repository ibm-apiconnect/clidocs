---
tags:
- "group: user-registries"
---
# apic user-registries:test-connection

Test a User Registry connection

## Synopsis

Test a User Registry connection

```
apic user-registries:test-connection [flags]
```

## Possible Usages

```
apic user-registries:test-connection [flags] --test-config-only USER_REGISTRY_TEST_CONNECTION_FILE
apic user-registries:test-connection [flags] USER_REGISTRY TEST_CONNECTION_CREDENTIALS_FILE
```

## Request examples

----------------------------------------------------------------------
#### Example of testing configuration of ldap or authurl user registry
----------------------------------------------------------------------

```
credentials:
  password: Passw0rd123
  username: acme
user_registry:
  case_sensitive: true
  configuration:
    admin_dn: cn=admin,dc=acme,dc=devops,dc=cloud
    admin_password: password123
    attribute_mapping: {}
    authenticated_bind: "true"
    authentication_method: search_dn
    directory_type: standard
    group_authentication_method: none
    protocol_version: "3"
    search_dn_base: dc=acme,dc=devops,dc=cloud
    search_dn_filter_prefix: (&(uid=
    search_dn_filter_suffix: ))
    search_dn_scope: sub
  email_required: true
  email_unique_if_exist: true
  endpoint:
    endpoint: ldap://acme-openldap.example.com:389
    tls_client_profile_url: null
  integration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/ldap
  name: acme-ldap
  registry_type: ldap
  summary: An example LDAP user registry.
  title: Acme LDAP User Registry
  user_managed: false
```

------------------------------------------
#### Example user registry test connection
------------------------------------------

```
password: Password123
username: acme
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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
