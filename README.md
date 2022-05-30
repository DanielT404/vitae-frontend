# Daniel Țună's own Internet personal space - from a frontend perspective

## Pre-configuration

Add `preact.config.js` in the root directory in order to expand the default webpack functionality, by using the following template:
[preact.config.js.example](https://github.com/DanielT404/vitae-frontend/blob/main/preact.config.js.example)

## Environments

### Development

#### Spin up application by using Docker containers

1. Build the image: `docker build -t {IMAGE_TAG} -f development.Dockerfile .`
2. Run the container: `docker run -dp {HOST_PORT}:{CONTAINER_PORT} -v [...] {IMAGE_TAG}`
   - if you are running the container on Windows: `-v %cd%:/app`
   - if you are running the container on Linux/macOS: `-v ${pwd}:/app`
3. Visit http://localhost:{HOST_PORT}

#### Known issues for Windows users

Hot Reloading feature may not work as intended while doing file changes locally due to some filesystem events incompatibilities between Windows and node libs mechanisms.
In order for the Docker container to sync with the local changes and reload, you must append to the command above the usage of polling. e.g. `docker run [...] -e CHOKIDAR_USEPOLLING=true`.<br/>
**WARNING! Setting `CHOKIDAR_USEPOLLING=true` is known to cause high CPU load to some users. If that's your case, you're better off spinning the application locally using CLI commands instead.**

#### Spin up application by using CLI commands

```bash
# Install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
```

### Production

#### Spin up application by using Docker containers

1. Build the image: `docker build -t {IMAGE_TAG} -f production.Dockerfile .`
2. Run the container: `docker run -dp {HOST_PORT}:{CONTAINER_PORT} -v [...] {IMAGE_TAG}`
   - if you are running the container on Windows: `-v %cd%:/app`
   - if you are running the container on Linux/macOS: `-v ${pwd}:/app`
3. Visit http://localhost:{HOST_PORT}

#### Spin up application by using CLI commands

```bash
# Install dependencies
npm install
# build for production with minification
npm run build
# test the production build locally
npm run serve
```

## Additional CLI commands

```bash
# lint source code
npm run lint
# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [preact-cli Readme](https://github.com/developit/preact-cli/blob/master/README.md).
