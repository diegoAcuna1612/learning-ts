interface Ubicacion{
    calle:string;
    numero:number;
}

interface DatosCatastrales{
    manzana:string;
    lote?:string
}

interface Predio{
    ubicacion:Ubicacion;
    datosCatastrales?:DatosCatastrales
}

const ejemploPredioSinCatastro:Predio = {
    ubicacion:{
        calle:'Av Juan',
        numero:2
    },
    datosCatastrales:{
        manzana:'C'
    }
}

console.log(ejemploPredioSinCatastro);