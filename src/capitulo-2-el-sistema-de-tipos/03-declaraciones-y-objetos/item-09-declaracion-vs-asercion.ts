// Item 9: Preferir las declaraciones de tipos a las aserciones de tipos
//Declaracion: Pedirle a TS que valide si algo es de un tipo
//Asercion: TS confia en mi palabra


interface Personaje{
    name:string;
    level:number;
}

//DECLARACION
const alice: Personaje={}; //Error: porque TS valida e indica que faltan las variables name y level

//ASERCION 
const bob ={} as Personaje; //No hay error porque TS confia en mi

//Declaracion es Superir, porque TS valida y nos ayuda a encontrar errores