---
sidebar_position: 1
---

# Introduction

How to use the API Connect command line interface.

## Installation

How to install the API Connect toolkit.

The toolkit can be downloaded directly from IBM Fix Central (be careful to get the same version as your API Connect deployment), or it can be downloaded directly from your API Manager UI. Both methods are covered here: [Installing](./install)

## Toolkit modes

The API Connect toolkit CLI runs commands on either the provider organization or on the consumer organization. When you run the command, you use the different mode options to identify the instance on which you want to run the command. The following list provides a summary of the modes that are available:

### apim

This mode applies to the administrative instances of the CLI. When you run commands in this mode, it uses the overall API Manager as its scope. This mode is the default mode.
An example of running a command in the apim mode:

```bash
apic extensions:list-all --mode apim --scope catalog --server server1 --catalog catalog1 --org myOrg --configured-gateway-service service1 
```

### analytics

This mode applies to the analytics instances of the CLI. This mode supports commands that you can use to access data from the analytics subsystem.
An example of running a command in the analytics mode:

```bash
apic --mode analytics events:cloudCount --catalog catalog1 --org myOrg --server server1 --format json
```

### portaladmin

This mode applies to the developer portal instances of the CLI. This mode supports commands that you can use to replicate all or part of your Developer Portal environment.
An example of running a command in the portaladmin mode:

```bash
apic --mode portaladmin custom-theme:create-export --catalog catalog1 --org myOrg --server server1 --format json
```

### consumer

This mode applies to the consumer instances of the CLI. This command uses the consumer organizations that you have permission to access as its scope. You must specify this mode or set it as the default value for the command to use it. This mode is for use by the consumer themselves and the authentication must be that of the API consumer.
An example of running a command in the consumer mode:

```bash
apic catalogs:list --mode consumer --scope catalog --server server1 --catalog catalog1 --org myOrg
```

To avoid having to supply the parameter on every consumer CLI command, you can set the mode configuration variable.

### governance

This mode applies to the governance instances of the CLI. This mode supports commands that you can use for the creation and management of rulesets and rules to be used for the validation of organizational governance policies on API and Product documents. The mode also supports running and managing validation scans of APIs and Products published to a Catalog or Space. An example of running a command in the governance mode:

```bash
apic --mode governance compliance:validate --org myOrg --server server1 --rulesets ruleset_name_1,ruleset_name_2 API_OR_PRODUCT_FILE_PATH
```

### discovery

This mode applies to the discovery instances of the CLI. This mode supports commands that you can use for the creation and management of data sources to be used for the discovery of API documents. The mode also supports the management of API documents that were discovered. An example of running a command in the discovery mode:

```bash
apic --mode discovery data-sources:create --org myOrg --server server1 DATA_SOURCE_FILE_PATH
```

### engagement

This mode applies to the engagement instances of the CLI, this is available in API Connect 10.0.9+. This mode supports commands that you can use for the creation and management of engagement rules and destinations. An example of running a command in the engagement mode:

```bash
apic --mode engagement rules:orgList --org myOrg --server server1
```

## Scripting

It's often helpful to automate a series of apic commands In a shell script. Since the apic tool first requires you to interactively accept the license, you must first use the following command:

```bash
apic --accept-license
```

Once you do that, your scripts can run non-interactively.
To disable collection of usage analytics, enter this command:

```bash
apic --live-help
```
