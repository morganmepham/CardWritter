import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  // Add any Electron APIs you want to expose to the renderer process
});

export {};
