//Entener que es codigo sincrono y asincrono
// Estamos en el LADO SERVIDOR
const fs = require('fs'); // importar libreria fs
console.log("Primero");
/*
fs.readFile(
    './a.txt', // path
    'utf-8', // codificacion
    (errorLectura, contenido) => { // callbacks!
        if(errorLectura){
            console.error('ERROR lectura 1');
        }else{
            console.log('TERCERO 1.1', contenido)
        }
    }
);
*/
fs.writeFile(
    './a.txt', // path
    'Hola! ' + new Date().toString(), // nuevo contenido
    (errorEscritura) => { // callbacks!
        if(errorEscritura){
            console.error('ERROR escritura');
        }else{
            console.log('Archivo escrito');
        }
    }
);
console.log("Segundo");

