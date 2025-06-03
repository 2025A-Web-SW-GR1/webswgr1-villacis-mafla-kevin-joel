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

leerArchivo('./a.txt')
    .then((contenido) => {
        const nuevoContenido = contenido + '\n' + new Date().toString();
        return escribirArchivo('./a.txt', nuevoContenido);
    })
    .then(() => {
        console.log('Archivo actualizado (promesa)');
    })
    .catch((err) => {
        console.error('Error:', err);
    });