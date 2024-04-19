# apic user:information

Gets Developer Portal Drupal User information

## Synopsis

Gets Developer Portal Drupal User information. You can filter on different fields to obtain a list of users matching your criteria.

```
apic user:information --mode portaladmin [flags]
```

## Possible Usages

```
      apic user:information --mode portaladmin [flags]
```

## Options

```
      --apic-state string     A comma-separated list of APIC states to filter Drupal Users by.
  -c, --catalog string        Name or ID of the Catalog that the site belongs to. (required)
      --consumer-org string   A comma-separated list of Consumer Org URLs to filter the return by.
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32           Limit the amount of results returned.
      --login-after string    A date to filter Drupal Users who last logged in after the provided date. Date needs to be given in format of MM-DD-YYY or MM-DD-YY HH:MM:SS
      --login-before string   A date to filter Drupal Users who last logged in before the provided date. Date needs to be given in format of MM-DD-YYY or MM-DD-YY HH:MM:SS
      --mail string           A comma-separated list of Drupal User Email addresses to perform the action on.
      --names string          A comma-separated list of names of Drupal Users to perform the action on.
      --offset int32          Offset the results return to aid in Pagination.
  -o, --org string            Name or ID of the organization that the catalog belongs to. (required)
      --role string           A comma-separated list of Drupal User Roles.
  -s, --server string         management server endpoint (required)
      --status string         Filter by Drupal User status. Choices are 'active' or 'blocked'.
      --uid string            A comma-separated list of UIDs of Drupal Users to perform the action on.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
