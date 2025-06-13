---
sidebar_position: 3
---

# Logging in to the toolkit

Information on how to login to the toolkit using different user registries and realms.

## Logging in to a management server

[https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server](https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server)

You log in to a management server from the command line by using the `apic login` command. The parameters that you supply determine the identity provider that is used to authenticated the supplied user ID, and the scope of the tasks that can be performed after successful log in.

:::note
If you want to log in with an OIDC user registry or if you are an IBM Cloud Pak for Integration (CP4I) user, see Logging in to a management server with an OIDC registry.
:::

Clear the credentials from any previous login by running the following command:

```bash
apic client-creds:clear
```

Clearing the credentials ensures that you do not inadvertently log in with the wrong set of credentials (for example, from a different product release or environment).

Set the credentials that you want to use now by running the following command:

```bash
apic client-creds:set path_to_credentials/credential.json
```

where `path_to_credentials` is the location of the `credential.json` file that you want to use. For example:

```bash
apic client-creds:set /Users/local_user/credential.json
```

Log in by running the following command:

```bash
apic login --server mgmt_endpoint_url --username user_id --password password --realm realm
```

The parameters for the apic login command are as follows:

### mgmt_endpoint_url

The URL depends on the type of organization that you are logging in with:

- Cloud admin organization or Provider organization: Use one of the following URLs:
  - platform API endpoint URL
  - management API manager URL
- Consumer organization: Use the consumer API endpoint URL

These endpoint URLs are configured during the installation of API Connect. If you have access to the Cloud Manager user interface, you can view the configured endpoint URLs as described in Viewing platform and UI endpoints, ignoring any segments at the end of the displayed URLs. If you are not sure of the endpoint URL, ask your administrator.

### user_id

The user ID you want to log in with. Depending on the tasks that you want to perform, this user ID might be any of the following:

- A user ID that is a member of the cloud administration organization. This is an ID that you could also use to log in to the Cloud Manager user interface.
- A user ID that is a member of a provider organization. This is an ID that you could also use to log in to the API Manager user interface.
- A user ID that is a member of a consumer organization. This is an ID that you could also use to log in to the Developer Portal.

### password

The password associated with the supplied user ID.

### realm

The realm parameter specifies the identity provider that is used to authenticated the supplied user ID, and the scope of the tasks that can be performed after successful log in.

The format of the realm depends on the type of user, as follows:

- Member of the cloud administration organization:
  
  ```json
  admin/identity_provider
  ```

To determine the identity provider, see [How to determine the identity provider](https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server#rapic_cli_login__determine_idp).

- Member of a provider organization:

  ```json
  provider/identity_provider
  ```

To determine the identity provider, see [How to determine the identity provider](https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server#rapic_cli_login__determine_idp).

- Member of a consumer organization:
  
  ```json
  consumer:provider_org:catalog/identity_provider
  ```

where `provider_org` is the name of your provider organization, and `catalog` is the name of the Catalog in that provider organization.
To determine the identity provider, see [How to determine the identity provider](https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server#rapic_cli_login__determine_idp).

## Logging in to a management server with an OIDC registry

[https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server-oidc-registry](https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts?topic=tool-logging-in-management-server-oidc-registry)

Logging in with an OIDC registry involves several steps, in which you obtain a temporary token and pass it to the toolkit to ensure it can communicate securely with the management server.

:::Attention
Logging in with an OIDC registry is supported for the developer toolkit (used with API Manager) and the Developer Portal admin toolkit, but is not supported for members of consumer organizations. If you are using IBM Cloud Pak for Integration (CP4I), review this topic for login instructions. If you want to log in using a non-OIDC registry, see Logging in to a management server above.
:::

To log in, complete the following steps:

1. Clear the credentials from any previous login by running the following command:

    ```bash
    apic client-creds:clear
    ```

    Clearing the credentials ensures that you do not inadvertently log in with the wrong set of credentials (for example, from a different product release or environment).

1. Set the credentials that you want to use now by running the following command:

    ```bash
    apic client-creds:set path_to_credentials/credential.json
    ```

    where `path_to_credentials` is the location of the `credential.json` file that you want to use. For example:

    ```bash
    apic client-creds:set /Users/local_user/credential.json
    ```

1. Log in by running the following command:

    ```bash
    apic login --server mgmt_endpoint_url --sso
    ```

    where `mgmt_endpoint_url` is the endpoint URL. When you log in with a Cloud admin or Provider organization, specify one of the following URLs:

   - platform API endpoint URL
   - management API manager URL

    These endpoint URLs are configured during the installation of API Connect. If you have access to the Cloud Manager user interface, you can view the configured endpoint URLs as described in Viewing platform and UI endpoints, ignoring any segments at the end of the displayed URLs. If you are not sure of the endpoint URL, ask your administrator.

    :::note
    CP4I: If you are using API Connect as a component of IBM Cloud Pak for Integration (CP4I), your administrator can provide the correct URL.
    :::

1. When the toolkit prompts for the context, type admin API Connect (administrators) or provider (everyone else):

    ```bash
    Context? provider
    ```

1. The server responds with the following message:

    ```bash
    Please copy and paste the url https://mgmt_endpoint_url/auth/manager/sign-in/?from=TOOLKIT to a browser to start the authentication process.
    Do you want to open the url in default browser? [y/n]: y
    ```

    Take one of the following actions:

    - If you want to use your default browser to log in to API Manager, type `y` and press `Enter`.
    The API Manager sign-in page opens in a new browser tab.

    - If you don't use to use your default browser, type `n` and press `Enter`.
    Copy the URL from the command window.
    Open a browser, paste the URL, and press Enter.
    The API Manager sign-in page displays.

1. On the API Manager sign-in page, select the OIDC registry and then log in to API Connect.

    :::
    CP4I: Select the Common Services User Registry.
    :::

    After you log in, API Connect displays the “You are authenticated!” message and provides a temporary token. Copy the token.

1. Return to the command window. Paste the token at the `API Key?` prompt and press `Enter`.

When the token is validated and you are successfully logged in to the toolkit, the following message displays:

```bash
Warning: Using default toolkit credentials.
Logged into mgmt_endpoint_url successfully
```

Note: If you see a message stating that credentials cannot be found, download new credentials as explained in [Installing](./install).
