interface Vector2D { x: number; y: number; }

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v3d = { x: 3, y: 4, z: 10 };
// ✅ TS lo permite aunque sobre la 'z', porque tiene 'x' e 'y'
//TIPADO ESTRUCTURAL: Si un objeto tiene todas las propiedades definidas en tipo, sin importar
//que tenga propiedades adicionales, funcionara.
calculateLength(v3d);