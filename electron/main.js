import { app, BrowserWindow, dialog, ipcMain, screen, shell } from "electron";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startServer } from "../build/server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appPort = Number(process.env.LOCAL_DB_STUDIO_DESKTOP_PORT || 59517);

app.setName("Quarry");
app.setPath("userData", path.join(app.getPath("appData"), "Local DB Studio"));

let serverHandle = null;
let mainWindow = null;
let saveWindowBoundsTimer = null;

const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  app.quit();
}

async function getServerHandle() {
  if (!serverHandle) {
    serverHandle = await startServer({ port: appPort, attempts: 0 });
  }
  return serverHandle;
}

function windowStatePath() {
  return path.join(app.getPath("userData"), "window-state.json");
}

function visibleOnAnyDisplay(bounds) {
  if (!bounds) return false;
  return screen.getAllDisplays().some((display) => {
    const area = display.workArea;
    const overlapWidth = Math.min(bounds.x + bounds.width, area.x + area.width) - Math.max(bounds.x, area.x);
    const overlapHeight = Math.min(bounds.y + bounds.height, area.y + area.height) - Math.max(bounds.y, area.y);
    return overlapWidth >= 120 && overlapHeight >= 80;
  });
}

function readWindowState() {
  try {
    const parsed = JSON.parse(fs.readFileSync(windowStatePath(), "utf8"));
    const bounds = {
      x: Number(parsed.x),
      y: Number(parsed.y),
      width: Math.max(1000, Number(parsed.width) || 1280),
      height: Math.max(680, Number(parsed.height) || 860)
    };
    if (!Number.isFinite(bounds.x) || !Number.isFinite(bounds.y) || !visibleOnAnyDisplay(bounds)) return {};
    return {
      ...bounds,
      maximized: Boolean(parsed.maximized)
    };
  } catch {
    return {};
  }
}

function saveWindowState(win = mainWindow) {
  if (!win || win.isDestroyed() || win.isMinimized() || win.isFullScreen()) return;
  const state = {
    ...win.getBounds(),
    maximized: win.isMaximized()
  };
  fs.mkdirSync(path.dirname(windowStatePath()), { recursive: true });
  fs.writeFileSync(windowStatePath(), JSON.stringify(state, null, 2));
}

function scheduleSaveWindowState() {
  clearTimeout(saveWindowBoundsTimer);
  saveWindowBoundsTimer = setTimeout(() => {
    saveWindowState();
    saveWindowBoundsTimer = null;
  }, 250);
}

async function createWindow() {
  const server = await getServerHandle();
  const rememberedWindowState = readWindowState();
  mainWindow = new BrowserWindow({
    width: rememberedWindowState.width || 1280,
    height: rememberedWindowState.height || 860,
    ...(Number.isFinite(rememberedWindowState.x) && Number.isFinite(rememberedWindowState.y)
      ? { x: rememberedWindowState.x, y: rememberedWindowState.y }
      : {}),
    minWidth: 1000,
    minHeight: 680,
    title: "Quarry",
    icon: path.join(app.getAppPath(), "build", "icon.icns"),
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  if (rememberedWindowState.maximized) mainWindow.maximize();

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(server.url)) shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("before-input-event", (event, input) => {
    if ((input.meta || input.control) && input.key?.toLowerCase() === "r") {
      event.preventDefault();
      mainWindow.webContents.send("refresh-data-shortcut");
    }
    if ((input.meta || input.control) && input.key?.toLowerCase() === "w") {
      event.preventDefault();
      mainWindow.webContents.send("close-tab-shortcut");
    }
    if ((input.meta || input.control) && input.key?.toLowerCase() === "t") {
      event.preventDefault();
      mainWindow.webContents.send("new-tab-shortcut");
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  mainWindow.on("resize", scheduleSaveWindowState);
  mainWindow.on("move", scheduleSaveWindowState);
  mainWindow.on("maximize", scheduleSaveWindowState);
  mainWindow.on("unmaximize", scheduleSaveWindowState);
  mainWindow.on("close", () => saveWindowState(mainWindow));

  await mainWindow.loadURL(server.url);
}

ipcMain.handle("choose-ssh-key", async () => {
  const result = await dialog.showOpenDialog({
    title: "Choose SSH private key",
    defaultPath: app.getPath("home"),
    properties: ["openFile", "showHiddenFiles"]
  });

  if (result.canceled || result.filePaths.length === 0) return null;
  return result.filePaths[0];
});

ipcMain.on("close-window-shortcut", () => {
  mainWindow?.close();
});

app.whenReady()
  .then(createWindow)
  .catch((error) => {
    dialog.showErrorBox(
      "Quarry failed to start",
      `Could not start the local app server on port ${appPort}.\n\n${error.message}`
    );
    app.quit();
  });

app.on("second-instance", () => {
  if (!mainWindow) return;
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.focus();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  serverHandle?.server?.close();
  serverHandle = null;
  if (process.platform !== "darwin") {
    app.quit();
  }
});
