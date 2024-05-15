# API Connect Toolkit CLI Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The website is published here: [https://ibm-apiconnect.github.io/clidocs/](https://ibm-apiconnect.github.io/clidocs/)

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

This command will build the website and push to the `gh-pages` branch. Do not push to the gh-pages branch directly yourself, only via the deploy command.
