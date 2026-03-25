interface Square { width: number; }
interface Rectangle extends Square { height: number; }
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  // ❌ Error: 'Rectangle' solo se refiere a un tipo, pero se usa como valor aquí.
  //JS no puede leer interfaces
  if (shape instanceof Rectangle) { 
    return shape.width * shape.height;
  }
}

// Solución: Comprobar una propiedad real que exista en JS 
function calculateAreaFixed(shape: Shape) {
  if ('height' in shape) {
    return shape.width * shape.height; // TS deduce que es Rectangle 
  }
}