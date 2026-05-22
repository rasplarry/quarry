const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopApi", {
  chooseSshKey: () => ipcRenderer.invoke("choose-ssh-key"),
  onRefreshDataShortcut: (callback) => {
    if (typeof callback !== "function") return () => {};
    const listener = () => callback();
    ipcRenderer.on("refresh-data-shortcut", listener);
    return () => ipcRenderer.removeListener("refresh-data-shortcut", listener);
  },
  onCloseTabShortcut: (callback) => {
    if (typeof callback !== "function") return () => {};
    const listener = () => callback();
    ipcRenderer.on("close-tab-shortcut", listener);
    return () => ipcRenderer.removeListener("close-tab-shortcut", listener);
  },
  onNewTabShortcut: (callback) => {
    if (typeof callback !== "function") return () => {};
    const listener = () => callback();
    ipcRenderer.on("new-tab-shortcut", listener);
    return () => ipcRenderer.removeListener("new-tab-shortcut", listener);
  },
  closeWindow: () => ipcRenderer.send("close-window-shortcut")
});
