console.log("Hola Typescript");
// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
let nombres = "Adrian";
nombres = "A";
nombres = 'C';
// nombres = 1;
let nombreTS: string = "";
console.log(typeof nombres, "nombres");
let numeros = 1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds");

// Truty y Falsy
let trutyFalsy:any;
trutyFalsy = "";
if(trutyFalsy){ // ""
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = "a";
if(trutyFalsy){ // "a"
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = -1;
if(trutyFalsy){ // -1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 0;
if(trutyFalsy){ // 0
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 1;
if(trutyFalsy){ // 1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = null;
if(trutyFalsy){ // null
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = {};
if(trutyFalsy){ // {}
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = [];
if(trutyFalsy){ // []
    console.log("Truty");
}else{
    console.log("falsy");
}

const adrian:any =  {
    "nombre" : "Adrian",
    'apellido': 'Eguez',
    edad: 36,
    hijos: 1,
    casado: true,
    zapatos: undefined,
    ropa: {
        color: "plomo",
        talla: 40
    },
    mascotas: ['Cache', 'Peque', 'Pandi'],
};
console.log(adrian);
// Acceder a las propiedades
adrian.nombre // "Adrian"
adrian["apellido"] // "Eguez"
// Modificar (reasignar)
adrian.nombre = "Vicente";
adrian["nombre"] = "Vicente";
// adrian = {}; ERROR
// Crear atributos
adrian.sueldo = 1.2;
adrian["gastos"] = 0.8;
// Eliminar propiedades
adrian.nombre = undefined;
delete adrian.nombre;

//Valores por valor o por referencia (similar a los punteros en C)
//Valores por valor
//Promitivas: number string BOOLEAN
let edadAdrian = 36;
let edadVicente = edadAdrian;
console.log(edadAdrian);//36
console.log(edadVicente);//36
edadAdrian = edadAdrian + 1;
console.log(edadAdrian);//37
console.log(edadVicente);//36


//Variables por referencia
//dos tipos de objetos json {} y arreglos []
let notas ={
    total: 10,
}

let notas2doBim = notas; //referencia
notas2doBim.total = notas2doBim.total + 1;// Cambia el valor de notas2doBim
console.log(notas);//11
console.log(notas2doBim);//11
//como clonar un objeto
let notasclonadas1 = Object.assign({}, notas);//object
let arregloCopiar = [1,2,3];//clonacion de un arreglo
let arregloclonado = Object.assign([], arregloCopiar);//arreglo

notasclonadas1.total = notasclonadas1.total + 1;// Cambia el valor de notas2doBim
console.log(notas);//11
console.log(notas2doBim);//11
console.log(notasclonadas1);//12


//Arreglos
//como iterar un arreglo
const arregloEjemplo = [1,2,3,4,5];
//for of (obtenemos el valor)

for(let valorArreglo of arregloEjemplo){
    console.log('valor', valorArreglo);
}

//for in (obtenemos el indice)
for(let indicedelArreglo of arregloEjemplo){
    console.log('indice', indicedelArreglo);
    console.log('valor', arregloEjemplo[indicedelArreglo]);
}

//Añádir al final un elemento
arregloEjemplo.push(6);// [1,2,3,4,5,6]
//eliminar el último elemento
arregloEjemplo.pop();// [1,2,3,4,5]
//Añádir al inicio un elemento
arregloEjemplo.unshift(0);// [0,1,2,3,4,5]
//eliminar el primer elemento
//splice  -indice donde empezar
//        -numero de elmentos a eliminar
//        -elementos a añadir
arregloEjemplo.splice(
    0, //emepezar en el indice 0
    3, //eliminar 3 elementos
    3,4,5 //añadir 3,4,5

    //arreglo original [0,1,2,3,4,5]
    //eliminados [0,1,2]
    //añadidos [3,4,5]
    //arreglo final [3,4,5,3,4,5]
);

//dentro de los arreglos tenemos algo llamado operadores (revisar para el examen)
//find
//findIndex
//foreach
//map
//filter
//some
//reduce

//funciones 

function solNumeros(a,b,c){
    return a + b + c;
}

function solNumerosTS(
    a:number,b:number,c:number):number{
    return a + b + c;
}

function solImprimir(texto:string):void{
    console.log(texto);
}

function solImprimir2(texto:string):undefined{
    console.log(texto);
}

//funcion nombrada

function nombreDeMiFuncion(){};

//funcion anonima
const funcionSinNombre = function(){};
nombreDeMiFuncion();
funcionSinNombre();
[].forEach(function(){});

//funcion  fat arrow
const funcionFatArrow = (
    a:number,
    b:number,
    c:number
):number => {
    return a + b + c;
}

const funcionFatArrowSinParametros = () => {
    console.log('Sin parametros');
}

const funcionFAOmitirReturn = (a,b) => a + b;
const unSoloParametro = a => a * a;

//Parametros infinitos
function sumarNumeros(
    ...todosNumeros:number[]
):number{
    let total = 0;
    for(let valorNumero of todosNumeros){
        total += valorNumero;
    }
    return total;
}

//destructuracion de objetos
const adrianDest = {
    nombre : "Adrian",
}

const carolinaDest = {
    nombre : "Carolina",   
    apellido: "Eguez",
}

//mergee de las dos vaiables (orden importa)
const adrianCarolinaDest = {
    ...adrianDest,
    ...carolinaDest
}   

//{nombre: "Carolina", apellido: "Eguez"}
const overrideDest = {
    ...carolinaDest,
    ...adrianDest,
    nombre: 'Vicente'
}   


//destructuracion de arreglos
const arregloDes1 = [1,2,3];
const arregloDes2 = [4,5,6];

//merge
const arreglounodosDesr = [ 
    ...arregloDes1,
    ...arregloDes2
] // [1,2,3,4,5,6]

const arreglodosunoDest =[
    ...arregloDes2,
    ...arregloDes1  
] // [4,5,6,1,2,3]

//la destructuracion es una forma de clonacion
const objetoAcopiar = {a: 1}
const objetoCopiadoA = {
    ...objetoAcopiar
}