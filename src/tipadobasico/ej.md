### El Escenario: SaaS de Gestión de Suscripciones

Imagina que estás construyendo el módulo central de un SaaS. Tienes un arreglo "sucio" (sin tipos) que viene de una base de datos antigua y tu misión es darle estructura y seguridad.

### 1. Los Datos Originales (Copia esto en tu archivo)

**TypeScript**

```
const pedidosCrudos = [
    { id: 1, usuario: ["Admin", 30], plan: "pro", ubicacion: [-12.04, -77.03], activo: true },
    { id: 2, usuario: ["Editor", 25], plan: "basic", ubicacion: [-12.05, -77.04], activo: false },
    { id: 3, usuario: ["Guest", 18], plan: "enterprise", ubicacion: [-12.06, -77.05], activo: true }
];
```

---

### 2. Instrucciones para la Refactorización

Tu objetivo es que al final del archivo no exista ninguna advertencia de TypeScript y que el código sea 100% autocompletable.

#### Paso A: Definir los Contratos (Types y Enums)

1. **Enum de Planes:** Crea un `enum` llamado `NivelSuscripcion` con los valores: `BASIC`, `PRO`, `ENTERPRISE`. Usa **String Enums** para que el valor en JS coincida con el texto.
2. **Tupla de Usuario:** Crea un `type` llamado `InfoUsuario` que sea una tupla de dos elementos: `[nombre: string, edad: number]`.
3. **Tupla de Ubicación:** Crea un `type` llamado `Coordenadas` que sea una tupla de dos números: `[lat: number, lng: number]`.

#### Paso B: Tipar el Arreglo Principal

1. Crea un nuevo arreglo llamado `pedidosValidados`.
2. Usa los tipos que definiste en el Paso A para asegurar que cada objeto dentro del arreglo tenga la forma correcta.
3. **Importante:** Asegúrate de que el campo `plan` use el `enum` y no un string cualquiera.

#### Paso C: La Función de Procesamiento

Crea una función llamada `procesarPedido` que reciba **un solo pedido** del arreglo.

1. La función debe imprimir en consola: `"Procesando usuario [NOMBRE] con plan [PLAN]"`.
2. **Regra de Oro:** No puedes usar el tipo `any`. Debes tipar el parámetro de la función usando una estructura que combine tus tipos anteriores.

---

### 3. El Reto de Seguridad (Modo Estricto)

Para validar que tu `tsconfig.json` está funcionando, intenta realizar estas acciones al final del archivo:

- Intenta asignar un cuarto nivel de suscripción que no esté en el `enum`.
- Intenta cambiar la `edad` del usuario (en la tupla) por un string.
- Intenta agregar un tercer número a las `Coordenadas`.

Si TypeScript te marca errores en rojo, **¡felicidades!** Has configurado tu entorno correctamente.

---

### 🏁 ¿Cómo saber si terminaste?

Habrás completado el módulo cuando:

1. El comando `npx tsc` no arroje ningún error en la terminal.
2. Al pasar el mouse sobre la variable `pedidosValidados`, el editor te muestre la estructura exacta de los datos.
3. Puedas mover la última tarjeta de tu Kanban de **Tipado Básico** a **DONE** .
