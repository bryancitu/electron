'use strict'

// Iniciando los objetos app y BroserWindow
import { app, BrowserWindow } from 'electron';
import devtools from './devtools';

if (process.env.NODE_ENV === 'development') {
    devtools()
}

// Ejecutando ordenes cuando la aplicacion esta lista
app.on('ready', () => {
    // Creando una ventana
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Hola Mundo',
        center: true,
        maximizable: false,
        // show: false
    })

    win.once('ready-to-show', () => {
        win.show()
    })

    //  cuando hacemos el evento de mover la ventana obtenemos la posicion
    win.on('move', () => {
        const position = win.getPosition()
        console.log('La posicion de la ventana es:', position);
    })
    
    // Detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () => {
        win = null
        app.quit()
    })

    // cargamos el contenido del la url a nuestra app desktop
    // win.loadURL('https://ego.pe/')
    win.loadURL(`file://${__dirname}/renderer/index.html`)
    
})

// Imprimiendo un mensaje en la consola antes de salir
app.on('before-quit', () => {
    console.log('Saliendo ...');
})