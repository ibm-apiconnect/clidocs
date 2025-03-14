---
tags:
- "group: payment-methods"
---
# apic payment-methods:create

Create a Payment Method object

## Synopsis

Create a Payment Method object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - consumer_org_url

```
apic payment-methods:create [flags]
```

## Possible Usages

```
apic payment-methods:create [flags] --space-initiated PAYMENT_METHOD_FILE
apic payment-methods:create [flags] PAYMENT_METHOD_FILE
```

## Request examples

----------------------------------------
#### Example of payment method creation.
----------------------------------------

```
billing_url: https://api.acme-apim.example.com/api/catalogs/org/acme-catalog/configured-billings/configured-billing
configuration:
  account_company: XYZ
  account_currency: USD
  account_email: acme@example.com
  account_name: Acme Steve
  account_phone: (919) 555 6789
name: acme-payment
summary: An example payment method creation
title: Acme payment method creation
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string         management server endpoint (required)
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
