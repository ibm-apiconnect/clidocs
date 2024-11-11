---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:postReloadSecureSettingsById

Reloads the keystore on nodes in the cluster

## Synopsis

Secure settings are stored in an on-disk keystore. Certain of these settings are reloadable. That is, you can change them on disk and reload them without restarting any nodes in the cluster. When you have updated reloadable secure settings in your keystore, you can use this API to reload those settings on each node.

```
apic clustermgmt:postReloadSecureSettingsById --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:postReloadSecureSettingsById --mode analytics [flags] ID SECURE_SETTINGS_PASSWORD

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
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
