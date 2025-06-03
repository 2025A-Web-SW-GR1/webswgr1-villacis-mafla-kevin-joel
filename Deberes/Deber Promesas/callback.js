const fs = require('fs');

fs.readFile('./a.txt', 'utf-8', (err, contenido) => {
    if (err) {
        console.error('Error leyendo:', err);
    } else {
        const nuevoContenido = contenido + '\n' + new Date().toString();
        fs.writeFile('./a.txt', nuevoContenido, (errEscritura) => {
            if (errEscritura) {
                console.error('Error escribiendo:', errEscritura);
            } else {
                console.log('Archivo actualizado (callback)');
            }
        });
    }
});