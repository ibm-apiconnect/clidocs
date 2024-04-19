# apic login

Log in to an IBM API Connect cloud

## Synopsis

Log in to an IBM API Connect cloud

```
apic login --mode consumer [flags]
```

## Examples

```
Interactive login
$ apic login
Enter your API Connect credentials
? Server: mgmnthost.com
? Realm: realm
? Username: tommy
? Password: password
Logged into mgmnthost.com successfully

Non-interactive login
$ apic login --username tommy --password password --server mgmnthost.com --realm realm 
Logged into mgmnthost.com successfully

Realm for Platform API is of the form: (admin|provider)/<identity-provider>
Use 'admin' for logging in to the toolkit if you are part of a Cloud administrative organization. Use 'provider' for logging in to the toolkit if you are part of a Provider organization.
The following command can be used to identify the identity-providers available:
./apic identity-providers:list --server mgmnthost.com --fields realm --scope (admin|provider)

Realm for Consumer API is of the form: consumer:<provider-org-name-or-id>:<catalog-name-or-id>/<catalog-identity-provider-name>
The catalog identity provider name is typically <catalog-name>-idp. If multiple User Registries are configured for a catalog, please choose the one where the User's account resides.
Example of realm for Consumer API: consumer:alpha:sandbox/sandbox-idp
The following command can be used to identify the identity-providers available:
./apic identity-providers:list --server consumerhost.com --org <provider-org-name-or-id> --catalog <catalog-name-or-id> --fields realm --mode consumer

```

## Options

```
      --apiKey string     apiKey
      --context string    context
  -h, --help              Help for login
  -p, --password string   password
  -r, --realm string      realm
  -s, --server string     management server endpoint
      --sso               sso
  -u, --username string   user name
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
