---
tags:
- "group: completion"
---
# apic completion zsh

Generate the autocompletion script for zsh

## Synopsis

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

`echo "autoload -U compinit; compinit" >> ~/.zshrc`

To load completions in your current shell session:

`source <(apic completion zsh)`

To load completions for every new session, execute once:

### Linux

`apic completion zsh > "${fpath[1]}/_apic"`

### macOS

`apic completion zsh > $(brew --prefix)/share/zsh/site-functions/_apic`

You will need to start a new shell for this setup to take effect.

```
apic completion zsh [flags]
```


## Options

```
  -h, --help              help for zsh
      --no-descriptions   disable completion descriptions
```

## Options inherited from parent commands

```
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```
