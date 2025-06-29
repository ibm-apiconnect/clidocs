---
tags:
- "group: destinations"
- "scope: org"
---
# apic destinations:orgCreate

Create a destination at provider organization scope

## Synopsis

Create a destination.

```
apic destinations:orgCreate --mode engagement [flags]
```

## Possible Usages

```
apic destinations:orgCreate --mode engagement [flags] DESTINATION_REQUEST_FILE
```

## Request examples

---------------------------
#### Create new destination
---------------------------

```
config_type: webhook
description: the description of the target destination
is_enabled: true
title: My custom server
webhook:
  header_params:
    Content-Type: application/json
    my-header: abcd
  method: POST
  target: https://custom.server.example.com
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
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
