'use strict';

const electron = require('electron');

const path = require('path');

const url = require('url');

const config = require('./config');

let template = [{
    label: '数据维护',
    submenu: [{
        label: '租赁单数据',
        accelerator: '',
        role: ''
    }, {
        label: '合同号',
        accelerator: '',
        role: '',
        click: function (item, focusedWindow) {
            // In the main process.
            const { BrowserWindow } = require('electron');

            // Or use `remote` from the renderer process.
            // const {BrowserWindow} = require('electron').remote


            let win = new BrowserWindow({ width:200,height:200 });

            win.setMenu(null);

            win.on('closed', () => {
                win = null;
            });
            win.loadURL(url.format({
                pathname: path.join(__dirname, config.view.path, config.view.sub.DataMaintenance, 'hth.html'),
                protocol: 'file:',
                slashes: true
            }));
        }
    }, {
        label: '材料名称',
        accelerator: '',
        role: ''
    }, {
        label: '材料规格',
        accelerator: '',
        role: ''
    }, {
        type: 'separator'
    }, {
        label: '维修赔偿等数据',
        accelerator: '',
        role: '',
        submenu: [{
            label: '维修保养费数据',
            accelerator: '',
            role: ''
        }, {
            label: '保费赔偿费数据',
            accelerator: '',
            role: ''
        }, {
            label: '预收押金数据',
            accelerator: '',
            role: ''
        }, {
            label: '已收租金数据',
            accelerator: '',
            role: ''
        }, {
            label: '其他费用数据',
            accelerator: '',
            role: ''
        }]
    }, {
        label: '进销数据',
        accelerator: '',
        role: '',
        submenu: [{
            label: '材料进货数据',
            accelerator: '',
            role: ''
        }, {
            label: '材料销售数据',
            accelerator: '',
            role: ''
        }]
    }, {
        type: 'separator'
    }, {
        label: '关闭',
        accelerator: 'CmdOrCtrl+Q',
        role: 'close'
    }]
}, {
    label: 'Edit',
    submenu: [{
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
    }, {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
    }, {
        type: 'separator'
    }, {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
    }, {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
    }, {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
    }, {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
    }]
}, {
    label: 'View',
    submenu: [{
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                // on reload, start fresh and close any old
                // open secondary windows
                if (focusedWindow.id === 1) {
                    BrowserWindow.getAllWindows().forEach(function (win) {
                        if (win.id > 1) {
                            win.close();
                        }
                    });
                }
                focusedWindow.reload();
            }
        }
    }, {
        label: 'Toggle Full Screen',
        accelerator: (function () {
            if (process.platform === 'darwin') {
                return 'Ctrl+Command+F';
            } else {
                return 'F11';
            }
        })(),
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
            }
        }
    }, {
        label: 'Toggle Developer Tools',
        accelerator: (function () {
            if (process.platform === 'darwin') {
                return 'Alt+Command+I';
            } else {
                return 'Ctrl+Shift+I';
            }
        })(),
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }
    }, {
        type: 'separator'
    }, {
        label: 'App Menu Demo',
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                const options = {
                    type: 'info',
                    title: 'Application Menu Demo',
                    buttons: ['Ok'],
                    message: 'This demo is for the Menu section, showing how to create a clickable menu item in the application menu.'
                };
                electron.dialog.showMessageBox(focusedWindow, options, function () { });
            }
        }
    }]
}, {
    label: 'Window',
    role: 'window',
    submenu: [{
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
    }, {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
    }, {
        type: 'separator'
    }, {
        label: 'Reopen Window',
        accelerator: 'CmdOrCtrl+Shift+T',
        enabled: false,
        key: 'reopenMenuItem',
        click: function () {
            app.emit('activate');
        }
    }]
}, {
    label: 'Help',
    role: 'help',
    submenu: [{
        label: 'Learn More',
        click: function () {
            electron.shell.openExternal('http://electron.atom.io');
        }
    }, {
        label: 'About Us',
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                const options = {
                    type: 'info',
                    title: '关于我们',
                    buttons: ['确定'],
                    message: '这是一款适用于建材租赁行业的APP桌面程序！'
                };
                electron.dialog.showMessageBox(focusedWindow, options, function () { });
            }
        }
    }]
}]
    ;
module.exports = template;