---
tags:
- "group: apic"
---
# apic

APIConnect toolkit e081077e0b734ee423fd578623cbcbba4f135d0b (Built 2025-06-08T09:00:00Z)


## Synopsis

APIConnect toolkit e081077e0b734ee423fd578623cbcbba4f135d0b (Built 2025-06-08T09:00:00Z)


```
apic [flags]
```


## Examples

```

To accept the license and disable live-help, you can run the following command:
$ apic --accept-license --live-help=false

To accept the license and enable live-help, you can run the following command:
$ apic --accept-license --live-help=true

To set the language, you can run the following command:
$ apic --lang [en-us|cs|de|es|fr|it|ja|ko|nl|pl|pt-br|ru|tr|zh-cn|zh-tw]
```

## Options

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
  -h, --help                  Help for apic
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
