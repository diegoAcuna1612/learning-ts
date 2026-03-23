const pedidosCrudos = [
    { id: 1, usuario: ["Admin", 30], plan: "PRO", ubicacion: [-12.04, -77.03], activo: true },
    { id: 2, usuario: ["Editor", 25], plan: "BASICO", ubicacion: [-12.05, -77.04], activo: false },
    { id: 3, usuario: ["Guest", 18], plan: "ENTERPRISE", ubicacion: [-12.06, -77.05], activo: true }
];


enum NivelSuscripcion{
    basic= "BASICO",
    pro="PRO",
    enterprise="ENTERPRISE"
}

type Coordenadas = [lat:number,lng:number];

type PedidosSaaS={
    id:number;
    usuario:[role:string,edad:number];
    plan:NivelSuscripcion;
    ubicacion:Coordenadas;
    activo:boolean
}
const pedidosValidados: PedidosSaaS[]= pedidosCrudos.map((pedido)=>{
    return {
        id:pedido.id,
        usuario:pedido.usuario as [string,number],
        plan:pedido.plan as NivelSuscripcion,
        ubicacion:pedido.ubicacion as [number,number],
        activo:pedido.activo
    }
});



function procesarPedido(lista:PedidosSaaS[]){
    lista.forEach((pedido)=>{
        console.log(`--- Pedido #${pedido.id} ---`);
        console.log(`Cliente: ${pedido.usuario[0]} Edad: ${pedido.usuario[1]}`);
        console.log(`Plan: ${pedido.plan}`);
        console.log(`Ubicacion: Latitud ${pedido.ubicacion[0]}  Longitud ${pedido.ubicacion[1]}`);
    })
}

procesarPedido(pedidosValidados);
