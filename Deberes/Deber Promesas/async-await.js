const fs = require('fs');

function leerArchivo(nombre) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombre, 'utf-8', (err, contenido) => {
            if (err) reject(err);
            else resolve(contenido);
        });
    });
}

function escribirArchivo(nombre, contenido) {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombre, contenido, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

async function agregarFecha() {
    try {
        const contenido = await leerArchivo('./a.txt');
        const nuevoContenido = contenido + '\n' + new Date().toString();
        await escribirArchivo('./a.txt', nuevoContenido);
        console.log('Archivo actualizado (async/await)');
    } catch (err) {
        console.error('Error:', err);
    }
}

agregarFecha();