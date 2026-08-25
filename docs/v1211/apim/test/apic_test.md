---
tags:
- "group: test"
---
# apic test

Tests the specified project assets

## Synopsis

Tests the specified project assets

```
apic test [flags]
```


## Options

```

  -n, --names <names>           tests the specified api asset kind. For
                                example, dev:TestPaymentAPI:1.0
  -a, --all                     tests all projects existing in the local
                                directory
  -l, --localDir <localDir>     path of the local directory of the specified
                                project asset. For example, C:\local_dir
  -t, --target <target>         endpoint of the API Gateway instance to which
                                the asset has to be deployed
  -u, --username <username>     username of the API Gateway instance to which
                                the asset has to be deployed
  -pwd, --password <password>   password of the API Gateway instance to which
                                the asset has to be deployed
  -d, --debug                   enable debug mode
  -e, --env <key=value>         add or overwrites the environment
                                configuration. For example,
                                key1=value1,key2=value2...
  -de, --deploy                 deploy the projects or the specified assets to
                                API Gateway
  -en, --endpoints <endpoints>  endpoints of the API in the project. For
                                example,
                                http://endpointURL1,https://endpointURL2...
  -o, --org <org>               Org is logially seeparated in to multiple
                                catalogs
  -c, --catalog <catalog>       API can be published to a catalog inside an
                                org, Catalog will be having the regsitered
                                gateway services
  -space, --space <space>       Spaces can be enabled within the catalog,
                                Spaces will be having the regsitered gateway
                                services
  -s, --server <server>         APIM instance in which org, catalogs, and
                                spaces are registered for the gateway services
  -token, --token <token>
  -f, --format <format>         output format for test results: json or csv.
                                Default: json
  -out, --output <output>       path where the test result file should be
                                stored. For example, C:\dir\test-results.json
  -h, --help                    display help for command
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
