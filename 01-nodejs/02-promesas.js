const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve,reject)=>{
            if(numero % 2 === 0){
                resolve(numero); // RETURN
            }else{
                reject('No es par!'); // THROW
            }
        }
    );
    return miPrimerPromesa
}
function promesaElevarAlCuadrado(numero){
    return new Promise(res=>res(numero * numero));
}

promesaEsPar(6)
    .then( // continuo async
        (respuestaEsPar)=>{
            console.log('Es par', respuestaEsPar);
            return promesaElevarAlCuadrado(
                respuestaEsPar
            );
        }
    )
    .then( // try
        (respuestaElevarCuadrado)=>{
            console.log('Elevado: ', 
                respuestaElevarCuadrado);
        }
    )
    .catch( // catch
        (respuestaError)=>{
            console.log('NO ES PAR', respuestaError);
        }
    );


    function leerArchivoPromesa(nombreArchivo){
        return new Promise(
            (rest,rej) =>{
                fs.readFile(
                    nombreArchivo, // path
                    'utf-8', // codificacion
                    (errorLectura, contenido) => { // callbacks!
                        if(errorLectura){
                            rej('ERROR lectura');
                        }else{
                            rest(contenido);
                        }
                    }
                );
            }
        )
    }

leerArchivoPromesa('./a.txt')
.then(
    (contenidoArchivo) => {
        console.log('Contenido del archivo: ', contenidoArchivo);
    }
).catch(
    (error)=>{
        console.error('Error al leer el archivo: ', error);
    }
)

//Esto es lo mismo que lo de abajo const correrLogicaPromesas = async () =>{}
//ASYNC AWAIT
//Reglas:
//1) Estamos dentro de una funcion nombrada, anonima o fat arrow
//2) Agregar la palabra async antes de la declaracion de la funcion
//3) Agregar await dentro de un bloque try catch antes de la promesa

async function correrLogicaPromesas(){
    try{
        const repsuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1) Respuesta Archivo', repsuestaLeerArchivo);

        const repsuestaLeerArchivo2 = await leerArchivoPromesa('./a.txt');
        console.log('2) Respuesta Archivo', repsuestaLeerArchivo);
        await leerArchivoPromesa('./a123.txt');
    }catch(error){
        console.log('3) ERROR', error);
    }
}