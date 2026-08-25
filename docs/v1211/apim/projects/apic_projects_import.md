---
tags:
- "group: projects"
---
# apic projects:import

Imports projects from a specified local directory into API Manager

## Synopsis

apic import imports one or more projects from a local directory into API Manager. The command reads project folders from the local filesystem, creates the corresponding projects in API Manager, and uploads all project files. Projects that already exist in API Manager are skipped.

```
apic projects:import [flags]
```

## Possible Usages

```
apic projects:import [flags]
```

## Examples

```
Importing a single project
  $apic import <project-name> --localDir <path-to-project-dir> --server <server> --org <provider-org-name>
Importing multiple projects
  $apic import <project-name-1>,<project-name-2> --localDir <path-to-project-dir> --server <server> --org <provider-org-name>
Importing all projects
  $apic import --all --localDir <path-to-project-dir> --server <server> --org <provider-org-name>

```

## Options

```

  -l, --localDir <localDir>  path of the local directory of the specified
                             project asset. For example, C:\local_dir
  -s, --server <server>      APIM instance in which org, catalogs, and spaces
                             are registered for the gateway services
  -o, --org <org>            Org is logially seeparated in to multiple catalogs
  -token, --token <token>    authentication token for API Manager
  -a, --all                  Imports all projects found in the local directory
                             into API Manager
  -d, --debug                enable debug mode
  -h, --help                 display help for command
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
