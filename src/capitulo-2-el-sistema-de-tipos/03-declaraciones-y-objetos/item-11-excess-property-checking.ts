// Item 11: Reconocer los lmites del exceso de comprobacin de propiedades
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

//Asignar un objeto literal a una variable directamente
//TS valida que el objeto literal tenga solo las propiedades de la interfaz
const room:Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present', // ❌ Error: 'elephant' no existe en 'Room'
};

interface Room2{
  numDoors: number;
  ceilingHeightFt: number;
}

//Aqui no estas asignando un objeto literal, estas asignando una variable
//Variable intermedia -> Elimina la proteccion 
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present', 
};


const r: Room2 = obj; // ✅ No hay error aquí
// TypeScript solo verifica propiedades en asignaciones directas

