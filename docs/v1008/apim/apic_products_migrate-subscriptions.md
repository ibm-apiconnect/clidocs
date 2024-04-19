# apic products:migrate-subscriptions

Products migrate-subscriptions operations

## Synopsis

Products migrate-subscriptions operations

```
apic products:migrate-subscriptions [flags]
```

## Possible Usages

```
      apic products:migrate-subscriptions [flags] --id --scope space ID MIGRATE_SUBSCRIPTION_SUBSET_FILE
      apic products:migrate-subscriptions [flags] --id --scope catalog ID MIGRATE_SUBSCRIPTION_SUBSET_FILE
      apic products:migrate-subscriptions [flags] --scope space NAME:VERSION MIGRATE_SUBSCRIPTION_SUBSET_FILE
      apic products:migrate-subscriptions [flags] --scope catalog NAME:VERSION MIGRATE_SUBSCRIPTION_SUBSET_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:migrate-subscriptions
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
