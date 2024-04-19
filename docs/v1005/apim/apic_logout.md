# apic logout

Log out of an IBM API Connect cloud

## Synopsis

Log out of an IBM API Connect cloud

```
apic logout [flags]
```

## Examples

```
Clear the local authentication credentials for mgmnthost.com
$ apic logout --server mgmnthost.com
Logged out of server mgmnthost.com

```

## Options

```
  -h, --help            Help for logout
  -s, --server string   management server endpoint
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
