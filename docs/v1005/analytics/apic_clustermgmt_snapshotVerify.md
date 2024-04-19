# apic clustermgmt:snapshotVerify

Verify snapshot repository.

## Synopsis

Verifies that a snapshot repository is functional.

```
apic clustermgmt:snapshotVerify --mode analytics [flags]
```

## Options

```
      --analytics-service string         Analytics service name or ID. (required)
      --cluster_manager_timeout string   Amount of time to wait for a connection to the master node. Optional, defaults to 30 seconds.
      --format string                    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                             Help for clustermgmt:snapshotVerify
      --output string                    Write file(s) to directory, instead of STDOUT (default "-")
      --repository string                Comma-separated list of snapshot repository names. (required)
  -s, --server string                    management server endpoint (required)
      --timeout string                   Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
