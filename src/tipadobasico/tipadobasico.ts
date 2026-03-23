//TypeScript te exige que definas el tipo de variables
/*
Tipado Básico - Configurar entorno con tsc --init e investigar flags strict
*/
//strict:true hace que te marque error al no poner el tipado.
//strict:false -> TS le asigna any a todas las variables sin tipado, propenso a errores

/*
function lavarVehiculo(vehiculo){
    console.log("Lavando...",vehiculo);
}*/

//Forma correcta de escribir en TS


/*
Tipado Básico - Implementar un Enum para estados de servicio (PENDING, IN_PROGRESS, FINISHED)
*/
enum EstadoLavado{
    Pendiente="PENDIENTE",
    Aprobado = "APROBADO",
    Finalizado="FINALIZADO",
    Entregado="ENTREGADO"
}
/*
Tipado Básico - Crear una Tupla para representar coordenadas GPS o un par clave-valor fijo
*/
type Coordenada = [latitud:number,longitud:number];
const sedeCarwash : Coordenada =[-123,123];

function lavarVehiculo(vehiculo:string){
    console.log(`Lavando... ${vehiculo}`);
}
function getEstadoLavado(vehiculo:string,estado:EstadoLavado){
    console.log(`${vehiculo} esta en estado ${estado}`); 
}
function getSedeCoords(coordenadas:Coordenada){
    const [x,y]= coordenadas;
    console.log(`La latitud es: ${x} y la longitud es ${y}`)
}

lavarVehiculo('Moto');
getEstadoLavado('Moto',EstadoLavado.Aprobado);
getEstadoLavado('Carro',EstadoLavado.Pendiente);
getSedeCoords(sedeCarwash);