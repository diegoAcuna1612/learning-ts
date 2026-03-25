// Esto es JavaScript válido y, por tanto, TypeScript válido [cite: 22]
function saludarJS(nombre) {
  console.log("Hola", nombre);
}

// Esto es TypeScript específico (el ": string" es una anotación de tipo) [cite: 42]
// Si intentas ejecutar esto en un navegador sin compilar, daría un SyntaxError [cite: 41]
function saludarTS(nombre: string) {
  console.log("Hola", nombre);
}


//Aqui entra el concepto de Superset, TS es un superset(superconjunto) de JS.
//Osea un progrmaa en JS es perfectamente un programa en TS (.js -> .ts)
//Pero TS añade sintaxis adicional que no es valida en JS puro  (.ts a .js)
