# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern
static website generator.

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## Build

When ready to deploy, new content will be built into the `deployment` branch.

```bash
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

Then you can run:

```bash
npm run serve
```

## Docker

To build the Docker image, run:

```bash
docker build -t ailab .
```

To run the Docker image, run:

```bash
docker run -p 3000:3000 ailab
```
