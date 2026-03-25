// Item 8: 
//Espacio de tipos: esto desaparece al compilar (TS final)
//Espacio de valores: esto existe incluso despues de compilar (JS final)

//class y enum existen en ambos espacios
//interface y type solo existen en el espacio de tipos


interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (r: number, h: number) => ({ radius: r, height: h });

function calculate(shape: Cylinder) {  // "shape :" es un declaracion de TIPO
  if (shape instanceof Cylinder) {    // "instaceof" es un operador de JS, por lo tanto existe en el espacio de VALORES
    // ...
  }
}