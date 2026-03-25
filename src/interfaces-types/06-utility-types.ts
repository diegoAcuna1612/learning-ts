export interface Propietario {
  readonly id: string;      
  documento: string;        
  tipo: 'Natural' | 'Jurídica';  //union type
  telefono?: string;        
}

export interface Predio {
  readonly codigoCatastral: string; 
  direccion: string;
  areaM2: number;
  tieneHabilitacionUrbana: boolean;
}

export interface ParametrosTecnicos {
  zonificacion: 'RDB' | 'RDM' | 'CV' | 'CZ'; 
  alturaMaximaPisos: number;
  retiroFrontalMetros: number;
  observacionesTecnicas?: string; 
}

export interface AppState {
  expedienteNumero: string;
  propietario: Propietario | null; 
  predio: Predio | null;
  parametros: ParametrosTecnicos | null;
  pasoActual: number;        
  estaCargando: boolean;     
  errores: string[];         
}

const miTramite:AppState={
    expedienteNumero:'E-2026-045',
    propietario: {
        id: "PR-001",     
        documento: '71434498',        
        tipo: 'Natural',  //union type
        telefono: '9906610214', 
    },
    predio:{
        codigoCatastral: '12312312331',
        direccion: 'Av...',
        areaM2: 12,
        tieneHabilitacionUrbana: true,
    },
    parametros:{
        zonificacion: 'CV', 
        alturaMaximaPisos: 12,
        retiroFrontalMetros: 1,
        observacionesTecnicas:'Ninguna' 
    },
    pasoActual:1,
    estaCargando: true,     
    errores:['404','400']
}

console.log(miTramite);