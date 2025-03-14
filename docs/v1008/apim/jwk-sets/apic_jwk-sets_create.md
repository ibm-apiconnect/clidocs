---
tags:
- "group: jwk-sets"
---
# apic jwk-sets:create

Create a Jwk Set object

## Synopsis

Create a Jwk Set object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic jwk-sets:create [flags]
```

## Possible Usages

```
apic jwk-sets:create [flags] JWK_SET_FILE
```

## Request examples

----------------------------------------------------------------------
#### Example of creating a JWK set containing a private and public key
----------------------------------------------------------------------

```
keys:
- d: CFpObmn1kAgkgfIlLMyFPGWobo2npm675YgXyy-ybhryvi1R7PoYA1y9m9geQoJJNC71hpDbvMQRMSF4NLvE9Hdbl6s-nr4zITklhwzwdr07Hb1p2lnJ_fsGFQNFVnGL--zDFvbZKAh0LdjSqCVG7PvV1baSg2IFLWIUcuPHO4L5RPueeSIXmDbLMZOt4hjetdn4B6zoiXfdaNOHrjfe-uZOVzywqjs7UdwlKiwgQ9eZACRkatnCBaPJGHheNjd6g9pT3HZxA6zmA_CZ3AGdneEg2g6pBWS94mMFQrgkFvjnrZHn9jO7FobVMrqaBWufBSPnAR86vSu3Hep-KBngUw
  dp: KORZ7ehBCifmLvlxA9qR7n7Wuzitu8-SwMCUiQgAq8fcTQnpSQY3pAfa-QrrttimXQooEeu5zszsC8kldAwTfKNB_f3SGBSx24Xqya0Xf6STYXldgc2Y34nPF4kyCaAplE06aiB-lAtqcTcmTRrFHjVBjAuHzpfKN6J3chkF9o0
  dq: iH_pnBEQ32A7ctv8BcSCtuwA9ePuczPngE_jhxptZM5jiCADp-E9upWFtZT3SZeAiD37MjWsTUaAwW3Uowus8CDchTN09cPSjFQffYAgL39NV_5jmIQ4aDPuDkPn94av6jzi3vOUzndrz2Xqp6MeOc64XpEQhyhcKAd1uIT1EPc
  e: AQAB
  kid: b449971a-2d70-4a60-8171-8f84d71536a3
  kty: RSA
  "n": s6-7fcj1M4c1fjoo1ZSyDfCxJ6C54jOJ3_u95CSa77AS6t8cTSRXrriyh9rd-mpxZaYlhZlsfoi286k5c8AcQRDv6Qu_IIv8FgoQEQNyTAWzspFsVoWNyF923V3vFfbgZuqdiOxODgAaEyjBWjOZ1yQTdQwT09g3aQSmS2UOsBGOI8mIPlnK_tZ6p4SxIC2kg_K8WeIoA8taT9CNfrOPHgJhG6kgcg5YOlpu9By5AqvZVALNPK4lAThwOfvrDG92MVekDRqGG4hUNaO4JhnV8eJz2cp1Qc3pKSJsDdubRY_mH6bd6FfG6LsAhkEvsmQYIE0T24pcZyti4mRf9-mqmQ
  p: 9nQtcWJt89_NT2xXg5ebo-uYFdVdGSCAdHjZkdWR0QWa4g8fMTEgBgPWZe-h3zzQoBm8AuoZZB6T9QKea9w0YAX-nesAkA0KgUoeaD4t-NhI12Il1irpAJTBdLreltE54M1Ca-SE4s6qpm9kJ8PIprxtdKeGMc5kRu0A0FBsGL8
  q: uqV-TdYImgwN4eISix7hV_f3VgEEQ1VfaV-65oGMh3PZCzV1kLm75fk32_NFaY1mLokbQeDJ3yUgiHi-iYRfKItS_22pZ1zGCEsN1k3lFr7ePrcgmjYMK2pUTpyxEc5Knzn5be4rb2dAvBsqccReps_RUxG2SA7YT7Xk9mqF-qc
  qi: ns5ITFsJs9uKCJTeeUrbplxK9CB3NKqJAQP7JIHaqHf0Ryz1SrUKCDpu3N-FlYMOQ8U_rtmNTAngy6s3SQ15GaOnwlI1e2howNAF0G0zo4o2flxLlSUtnxsKSvM3-K6JyX6bw2S6aZkS0Y04U6RH1xPDWTRCd09MKYjD5AGjgvg
- e: AQAB
  kid: b449971a-2d70-4a60-8171-8f84d71536a3
  kty: RSA
  "n": s6-7fcj1M4c1fjoo1ZSyDfCxJ6C54jOJ3_u95CSa77AS6t8cTSRXrriyh9rd-mpxZaYlhZlsfoi286k5c8AcQRDv6Qu_IIv8FgoQEQNyTAWzspFsVoWNyF923V3vFfbgZuqdiOxODgAaEyjBWjOZ1yQTdQwT09g3aQSmS2UOsBGOI8mIPlnK_tZ6p4SxIC2kg_K8WeIoA8taT9CNfrOPHgJhG6kgcg5YOlpu9By5AqvZVALNPK4lAThwOfvrDG92MVekDRqGG4hUNaO4JhnV8eJz2cp1Qc3pKSJsDdubRY_mH6bd6FfG6LsAhkEvsmQYIE0T24pcZyti4mRf9-mqmQ
title: acme-jwkset
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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
