// Item 13: Conocer las diferencias entre "type" e "interface"
//Para definir varios tipos (unions)
//Uniones Literales son exclusivas de los type aliases
type generos = 'Rock'|'Pop'|'Jazz'


//Para librerias que quiero que los dev puedan agregar sus propias opciones

interface IState { name: string; } //incial (libreria o api)
interface IState { population: number; } //desarrolador agrega sus propias opciones

const s: IState = { name: 'Cuzco', population: 500_000 }; // OK 

//Tuplas, es mas ordenado con type que con number
//Las interfaces con tuplas pierden metodos (Ejm:concat)
type coordenadasXyY = [latitud:number,longitud:number];

const puntoA:coordenadasXyY =[13,2];
const puntoB:coordenadasXyY =[1,4];

const ruta = puntoA.concat(puntoB)
console.log(ruta);

