---
sidebar_position: 4
---

# Using configuration variables

You can set the values of commonly-used properties in configuration variables. In general, it's easier and more consistent to set configuration variables instead of specifying them using command-line options.

:::note

You can set a configuration variable locally (the default) to affect only the current LoopBack project, or globally (with command-line option -g), to affect all projects. The local value supersedes the global value. You can set local configuration variables only for LoopBack projects. When you set configuration variables for OpenAPI projects, they are always global.

:::

The values of local configuration variables are stored in the `project-root/.apiconnect/config` file, where `project-root` is the project root directory. The values of global configuration variables are stored in the `user-home-dir/.apiconnect/config` file, where `user-home-dir` is the user's home directory.

Use the following commands to work with configuration variables:

`apic config:get varname` - Get a configuration variable. Use `apic config` to display the values of all local configuration variables or `apic config -g` to display the values of all global configuration variables.

`apic config:set varname` - Set or update the specified configuration variable.

`apic config:delete varname` - Delete the specified configuration variable.

`apic config:clear` - Delete all configuration variables.

You set configuration property values by using the `apic config:set` command. By setting configuration properties (for example catalog and app), you do not need to supply values for these options when you enter a command.

Additionally, you can use `apic properties` commands to work with configuration properties:

`apic properties:clear` - Clear the configuration properties.

`apic properties:create` - Augment the configuration properties with additional name/value pairs.

`apic properties:delete` - Delete the configuration property.

`apic properties:get` - Get the configuration property.

`apic properties:list` - List the configuration properties.

`apic properties:update` - Update the configuration property.

:::note

If you have an environment variable of the same name as a CLI configuration property then, by default, its value will override the value of the corresponding CLI configuration property for any CLI command at that scope.

For example, if you have defined an environment variable called `SPACE` then, by default, that value will be assumed for the value of the `--space` parameter in the following command, regardless of any space configuration property setting:

```bash
apic products:publish my_product.yaml --scope space
```

To prevent environment variables overriding CLI configuration properties, define an environment variable called APIC_LOAD_FROM_ENV, set to the value false.

:::

To set configuration properties, enter the following command:

```bash
apic config:set name=value
```

where name is the name of the configuration property and value the value to assign to it.
For example:

```bash
apic config:set catalog=https://platform-api.myserver.com/api/catalogs/climbon/sandbox
```
