const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("ipcRenderer", {
  send: () => {
    ipcRenderer.send("app_version");
  },
  getVersion: (fn) => {
    ipcRenderer.on("app_version", (event, arg) => {
      ipcRenderer.removeAllListeners("app_version");
      fn(arg);
    });
  },
  checkHasUpdate: (fn) => {
    ipcRenderer.on("update_available", () => {
      ipcRenderer.removeAllListeners("update_available");
    });
  },
  checkIsDownloaded: (fn) => {
    ipcRenderer.on("update_downloaded", () => {
      ipcRenderer.removeAllListeners("update_downloaded");
    });
  },
  restartApp: () => {
    ipcRenderer.send("restart_app");
  },
});
