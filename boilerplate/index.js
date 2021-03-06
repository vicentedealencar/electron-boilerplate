'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');

if(require('electron-squirrel-startup')) return;

const checkUpdateExe = () => {
	const path = require('path');
	const fs = require('fs');
	const appFolder = path.dirname(process.execPath); // i.e. my-app/app-0.1.13/
	const updateExe = path.resolve(appFolder, '..', 'Update.exe'); //i.e. my-app/Update.exe

	return path.basename(appFolder) != 'dist'; // dist\electron.exe
};

if (checkUpdateExe()) {
	const autoUpdater = require('auto-updater');

	autoUpdater.setFeedUrl('http://127.0.0.1:8081/updates');
	autoUpdater.checkForUpdates();
	autoUpdater.on('update-downloaded', () => autoUpdater.quitAndInstall());
}

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 600,
		height: 400
	});

	win.loadUrl(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
