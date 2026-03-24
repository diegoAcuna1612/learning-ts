// Item 6: Explorar el sistema de tipos empleando el editor
function procesar(valor: string | number) {
  if (typeof valor === 'string') { //Aca el valor es number o string
    return valor.length; // Narrowing -> El tipo de valor cambio a unicamente string dentro del if
  }
  return valor; // <-- El tipo valor ahora es number por el narrowing
}

console.log(procesar('asd'))