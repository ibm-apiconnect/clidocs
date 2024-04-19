# apic reports:catalogApiusageProductsLeaderboard

API usage report product leaderboard (catalog)

## Synopsis

Return the data needed to populate the product leaderboard for the API usage report at catalog scope.

```
apic reports:catalogApiusageProductsLeaderboard --mode analytics [flags]
```

## Possible Usages

```
      apic reports:catalogApiusageProductsLeaderboard --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
  -c, --catalog string             Catalog name or ID. (required)
      --end string                 If set, only return events with a datetime equal or older than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.

      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --start string               If set, only return events with a date equal to or newer than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.

      --timeframe string           If set, only return events within the indicated timeframe. Timeframe values are in the format of 'last<value><unit>' where <value> is a positive integer greater than one, and <unit> can be one of day, month, quarter or year.

```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
