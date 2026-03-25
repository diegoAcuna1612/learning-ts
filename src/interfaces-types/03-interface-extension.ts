interface Auditoria{
    creadorPor:string;
    fecha:Date; 
}


interface SolicitudCatastro extends Auditoria{
    id: number
    dniSolicitante: string
    estado : 'pendiente' | 'aprobado' | 'rechazado'
}


const miSolicitud: SolicitudCatastro={
    id:1,
    dniSolicitante:'12312312',
    estado:'pendiente',
    creadorPor:'Juan',
    fecha: new Date()
}

console.log(miSolicitud)