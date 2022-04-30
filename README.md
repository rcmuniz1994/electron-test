# electron-app

ℹ️ Node version: 14 or later.

This project was created to validate if a electron app could consume api using http and https.

The project was bootstraped using [Create React App](https://github.com/facebook/create-react-app).

The project uses [Electron](https://github.com/electron/electron) for desktop app development.


# Available scripts

## Run the project (Web app)
```shell
npm start
```
## Run the project (Desktop app)
```shell
npm run electron-dev
```
## Build project for production (Web app)
```shell
npm run build
```

## Build project for production (Desktop app)
generates a exe/rpm/deb/dmg depending on operational system
```shell
npm run app:dist
```
---

## How to run the project as a desktop app

1. Open an terminal and run the project as a web app (`npm start`).
2. Then, on another terminal, run the project as a desktop app (`npm run electron-dev`).

---

## How to run the HTTP server

1. Open a new terminal and, from the project root folder, run: `cd http-server`
2. Then run: `node json.js`

As a test, on a new terminal, run: `curl http://localhost:8000`. If you get this `{"message": "Test is a JSON response"}` as an answer, then the server is running fine.

---

## How to build the Desktop app

⚠️ Warnning: Before you start make sure you the build [prerequisites](https://www.electronjs.org/docs/latest/development/build-instructions-linux) installed.

1. Build the project as an web app (`npm run build`)
2. Then, build the project as an desktop app (`npm run app:dist`)

After this an folder called `dist` was created. There will be the installer for the desktop app.

---

## How to build and publish the Desktop app for Windows using Docker

> **⚠️ Warnning 1:** Before you start, create a file named `env.sh`. Copy the content from `env.sh.sample` and past it on the new file. After this, replace the GH_TOKEN value for your Github Token. If you don't have a Github Token, see this [doc](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create one.


> **⚠️ Warnning 2:** Also before you start, add this at the end of the package.json:
> ```json
> "repository": {
>  "type" : "git",
>  "url" : "https://github.com/[YOUR USERNAME]/[YOUR REPO NAME].git"
>}
>```
> And replace the url value for your repository url.

Now we can go. To build the desktop app for Windows using Docker run on the project root directory:

```bash
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD##*/}-node-modules:/project/node_modules \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 electronuserland/builder:wine
```

On the container terminal, to install the project dependencies run:

```bash
yarn
```

Then, you must run the following command to build and publish a new version on the Github Releases:

```bash
source env.sh && yarn electron-deploy-win
```

Once it finishes, go to the [repository releases on GitHub](https://github.com/rcmuniz1994/electron-test/releases). You’ll see a draft release.

Click on “Edit”, and then “Publish” to finalize the release.
