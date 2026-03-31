// Item 12: Aplicar tipos a expresiones de funcin completas cuando sea posible


//Declaraciones vs Expresiones

    //Declaracion de una funcion:
    function suma_function(a:number ,b:number ):number{
        return a+b;
    }

    //Expresion de funcion
    const suma_expresion = (a:number,b:number):number => a+b


//Contrato de la Funcion(DRY)
type OperacionBinaria = (a:number,b:number) => number

const sumar:OperacionBinaria = (a,b) => a+b
const restar:OperacionBinaria = (a,b) => a-b
const multiplicar:OperacionBinaria = (a,b) => a*b
const dividir:OperacionBinaria = (a,b) => a/b


//SuperPoderes typeof

function guardarTarea(id:string, datos:{nombre:string,tipo:string,dificultad:string}){
    console.log(`Guardando tarea ${datos.nombre}`)
    return Promise.resolve(true);
}

const guardarConLog:typeof guardarTarea = async(id,datos) =>{
    console.log(`Guardando usuario ${id}...`);
    const resultado= await guardarTarea(id,datos);
    console.log(`Resultado: ${resultado}`);
    return resultado;
}