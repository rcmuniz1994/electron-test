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

## How to build the Desktop app

⚠️ Warnning: Before you start make sure you the build [prerequisites](https://www.electronjs.org/docs/latest/development/build-instructions-linux) installed.

1. Build the project as an web app (`npm run build`)
2. Then, build the project as an desktop app (`npm run app:dist`)

After this an folder called `dist` was created. There will be the installer for the desktop app.
