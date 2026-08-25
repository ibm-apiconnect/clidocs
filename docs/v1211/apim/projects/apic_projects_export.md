---
tags:
- "group: projects"
---
# apic projects:export

Exports projects from API Manager to specified local directory

## Synopsis

apic export exports one or more projects from API Manager to a ZIP archive in a local directory. The command retrieves project artifacts from API Manager and packages them into a ZIP file for local storage.

```
apic projects:export [flags]
```

## Possible Usages

```
apic projects:export [flags]
```

## Examples

```
Exporting a single project
  $apic export <project-name> --localDir <path-to-project-dir> --server <server> --org <provider-org-name>
Exporting multiple projects
  $apic export <project-name-1>,<project-name-2> --localDir <path-to-project-dir> --server <server> --org <provider-org-name>
Exporting all projects
  $apic export --all --localDir <path-to-project-dir> --server <server> --org <provider-org-name>
Exporting a project with dependencies
  $apic export <project-name> --localDir <path-to-project-dir> --server <server> --org <provider-org-name> --dependencies true

```

## Options

```

  -l, --localDir <localDir>      path of the local directory of the specified
                                 project asset. For example, C:\local_dir
  -s, --server <server>          APIM instance in which org, catalogs, and
                                 spaces are registered for the gateway services
  -o, --org <org>                Org is logially seeparated in to multiple
                                 catalogs
  -token, --token <token>        authentication token for API Manager
  -a, --all                      Exports all projects existing in API Manager
  --dependencies <dependencies>  Include dependent projects (transitive
                                 dependencies). Accepts 'true' or 'false'.
                                 Default: 'false' (default: false)
  -d, --debug                    enable debug mode
  -h, --help                     display help for command
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
