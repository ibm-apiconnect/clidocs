---
sidebar_position: 2
---

# Installation

The toolkit is provided as executable files, so no actual installation is necessary, you just to need to download the required compressed file and extract the contents.

There are two toolkit options available:

- CLI: provides a command line environment for working with IBM API Connect.
- CLI + Designer: provides a command line environment for working with IBM API Connect and the API Designer application.

To install the toolkit, download the compressed file that is appropriate for your chosen toolkit option and platform, then extract the contents to a chosen location on your local machine. The compressed file contains an executable file for running CLI commands and, if you choose the CLI + Designer option, an executable file for launching the API Designer application.

You can download the toolkit from one of the following locations:

- From IBM Fix Central.
- From the Cloud Manager or API Manager user interface.

Official installation instructions: [https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=configuration-installing-toolkit](https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=configuration-installing-toolkit)

## Procedure

To install and run the toolkit, complete the following steps:

1. Download the toolkit compressed file.

   - To download the toolkit from [IBM Fix Central](https://www-945.ibm.com/support/fixcentral/), complete the following steps:

      1. Open the [IBM Fix Central](https://www-945.ibm.com/support/fixcentral/) site in your browser.
      2. In the Product selector field, enter `API Connect`, then select **IBM API Connect** from the drop down list.
      3. Select your Installed Version and click **Continue**. If you do not know your installed IBM API Connect version, contact your administrator.
      4. In the Text field, enter `toolkit`, then click **Continue**.
      5. Select the toolkit file that you want to download.
      6. Click **Continue**, then follow the instructions to complete the download operation.

   - To download the toolkit from Cloud Manager or API Manager user interface, complete the following steps:
      1. Open the **Cloud Manager** or **API Manager** user interface.
      1. On the welcome page, click the **Download Toolkit** tile. The two toolkit options are listed.
      1. Click your platform alongside either the CLI option or the CLI +  Designer option as required, then save the associated compressed file to your local file system.
      1. To download the API Designer credentials (Client ID and Client Secret), click **Download** alongside **API Designer Credentials**, then save the `designer_credentials.json` file to your local file system. A command is provided for installing the credentials, as described in detail in step 6.
      1. To download the toolkit credentials (Client ID and Client Secret), click **Download** alongside **Credential**, then save the `credentials.json` file to your local file system. A command is provided for installing the credentials, as described in detail in step 5.
      1. Close the Install API Connect Toolkit window.
1. Extract the contents of the toolkit compressed file to a folder of your choice.
    The contents of the file depend on the your chosen toolkit option and platform, as follows:

    The `apic-slim` or `apic-slim.exe` file is the CLI for IBM API Connect.
    The `apic` or `apic.exe` file is the CLI for IBM API Connect including LoopBack support.

    :::
    Tip: If you are using the CLI option, then if you rename the `apic-slim` file to `apic`, or the `apic-slim.exe` file to `apic.exe`, you can run the CLI commands exactly as documented, copy and paste sample commands from the documentation, and use any command scripts as-is if you later move to the CLI + Designer option.
    :::

    The `api_designer-platform` file is the API Designer user interface application for the specified platform.

1. Optional: Delete the `$HOME/.apiconnect/node_clis` directory.
    You need to do this only if you replaced a version of `apic` or `apic.exe` and are using the `apic lb4` command. You need to delete the directory get apic to unpack the new loopback.

    On Windows, `$HOME` is defined by environment `USERPROFILE`.

1. Run the CLI.
    - For the Mac OSX or Linux® platforms, complete the following steps:
      1. Open a terminal instance and navigate to the folder where you extracted the contents of the toolkit compressed file.
      2. Make the CLI file an executable file by entering the following command:

          ```bash
          chmod +x download_name
          ```

          Where `download_name` is the name of the toolkit file that you downloaded, either `apic` or `apic-slim`.

      3. Run CLI commands as follows:

          ```bash
          ./apic command_name_and_parameters
          ```

          or

          ```bash
          ./apic-slim command_name_and_parameters
          ```

          For details of the CLI commands, see the relevant reference section on this site for your APIC version.

    - For the Windows platform, complete the following steps:
      1. Open a command prompt and navigate to the folder where you extracted the contents of the toolkit compressed file.
      1. Run CLI commands as follows:

          ```bash
          apic command_name_and_parameters
          ```

          or

          ```bash
          apic-slim command_name_and_parameters
          ```

        For details of the CLI commands, see the relevant reference section on this site for your APIC version.

    :::
    Tip: Add the folder location of your CLI file to your `PATH` variable so that you can run CLI commands from anywhere in your file system.
    :::

1. Install the toolkit credentials.
    If you do not install the toolkit credentials that are provided for download, as detailed previously in the toolkit credentials download instructions, API Connect uses a default set of credentials that are identical for all deployments. However, the downloaded credentials were generated during the deployment of your API Connect system and are unique to your installation. To install the credentials into your local toolkit, run the following command:

    ```bash
    apic client-creds:set toolkit_credentials_file_path/credentials.json
    ```

    where `credentials_file_path` is the location to which you downloaded the toolkit credentials JSON file. After you have run this command, your toolkit uses these new credentials to authenticate with the management server.

    :::note
    Note: At any one time, you can use only one set of toolkit credentials for login to a management server from the toolkit CLI. If you want to log in to a different management server you must install the toolkit credentials from that management server.
    :::

    To revert to the default toolkit credentials for all login operations from the toolkit CLI, use the following command:

    ```bash
    apic client-creds:clear
    ```

    For increased security, an administrator can remove the default credentials from the management server by completing the following steps:
    - Log in to the management server as an administrator; see Logging in to a management server.
    - Delete the default credentials by running the following commands:

      ```bash
      apic registrations:delete toolkit --server mgmt_endpoint_url
      apic registrations:delete consumer-toolkit --server mgmt_endpoint_url
      ```

1. Install the API Designer credentials.
    If you do not install the API Designer credentials that are provided for download, as detailed previously in the API Designer credentials download instructions, API Connect uses a default set of credentials that are identical for all deployments. However, the downloaded credentials were generated during the deployment of your API Connect system and are unique to your installation. To install the custom credentials into your local API Designer, set the `APIC_DESIGNER_CREDENTIALS` environment variable to the credentials download location, using the mechanism appropriate for your operating system.

    After you have set the `APIC_DESIGNER_CREDENTIALS` environment variable, your API Designer uses the new credentials to authenticate with the management server.

    - Windows:
      If you are using Windows, create an environment variable using one of the following methods:

      - Create a permanent environment variable so that you can start API Designer from any location on your computer:
        1. Open the Environment Variables page: Click Start > Settings > System and in the "Related Settings" section of the page, click Advanced System Settings.
        2. On the Advanced tab of the System Properties dialog box, click Environment Variables.
        3. In the "User variables" section, click New and create an environment variables with the following settings:
           - Variable: `APIC_DESIGNER_CREDENTIALS`
           - Value: `<designer_credentials_file_path>\designer_credentials.json` where `<designer_credentials_file_path>` is the location where you stored the `designer_credentials.json` file.
        4. Click OK to save the new environment variable, and then exit the dialog box.
      - If you don't have the required permissions to create a permanent environment variable, you can create a temporary one that will only be used while you are running the API Designer application. The following steps must be performed every time you start API Designer:
        1. Open the Windows command prompt.
        1. Run the following command to set the temporary environment variable:
        
            ```batch
            set APIC_DESIGNER_CREDENTIALS=<designer_credentials_file_path>\designer_credentials.json
            ```

            where `<designer_credentials_file_path>` is the location where you stored the `designer_credentials.json` file.

            :::note
            Note: Leave the command prompt open for the next step. You must set the temporary variable and start the API Designer within the same Windows command session.
            :::

        2. Now run the following command to start API Designer:

            ```powershell
            C:\"Program Files\API Designer\API Designer.exe"
            ```

            By default, API Designer is installed in the `C:\"Program Files\API Designer` folder as shown in the example. If you installed it into a different location, use your own location in the command. Note that the path and file name are enclosed in quotation marks because they contain spaces.

    - Mac:
    If you are using Mac OS X, create an environment variable using one of the following methods:

      - Run the following command to set the global environment variable:

          ```bash
          launchctl setenv APIC_DESIGNER_CREDENTIALS <designer_credentials_file_path>/designer_credentials.json
          ```

          where `<designer_credentials_file_path>` is the location where you stored the API Designer credentials JSON file.
      - Pass in the environment variable while starting API Designer from the command line. With this method, you must run the following command every time you start API Designer:

          ```bash
          APIC_DESIGNER_CREDENTIALS=<designer_credentials_file_path>/designer_credentials.json open <designer_application_file_path>/'API Designer.app'
          ```

          where:
          `<designer_credentials_file_path>` is the location to which you downloaded the API Designer credentials JSON file.
          `<designer_application_file_path>` is the location to which you downloaded and uncompressed the API Designer application.

1. Start the API Designer application from the location to where you stored the extracted file.

:::Note:

- To uninstall the API Designer application on a Windows platform with a non Administrator account, complete the following steps:
  
  In Windows File Explorer, navigate to the `USER_HOME\AppData\Local\Programs\api-designer` folder.
  Run the Uninstall API Designer application application. Do not use the Add or remove programs window.
- To uninstall the API Designer application on a Windows platform with an Administrator account, you can either run the Uninstall API Designer application application, or you can use the Add or remove programs window.
:::
