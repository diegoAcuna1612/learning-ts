# Aprendizaje TypeScript

Este es un proyecto de práctica para aprender los fundamentos y características avanzadas de TypeScript. Contiene una configuración básica para escribir, compilar y ejecutar tu código.

## 🛠️ Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (la instalación incluye `npm`, el gestor de paquetes que usaremos).

---

## 🚀 Instalación y Preparación

Dado que el proyecto ya cuenta con su configuración base (`package.json` y `tsconfig.json`), solo necesitas instalar las dependencias necesarias.

Abre tu terminal en la raíz del proyecto (`c:\pers\aprendizaje-ts`) y ejecuta:

```bash
npm install
```

Esto descargará e instalará **TypeScript** (y otras herramientas de desarrollo que hubiere configuradas) dentro de la carpeta `node_modules`.

---

## 🏃‍♂️ Cómo compilar y ejecutar el código

Todo el código fuente en TypeScript (`.ts`) se aloja en la carpeta `src/`. Para poder ejecutarlo en Node.js, primero debe ser transpilado a JavaScript (`.js`), el cual se generará en la carpeta `dist/`.

### 1. Compilar el proyecto

Para compilar todos los archivos TypeScript de una sola vez, ejecuta:

```bash
npx tsc
```

**Tip:** Si quieres que TypeScript recompile tus archivos automáticamente cada vez que los guardas, puedes usar el "modo observador" (watch mode):

```bash
npx tsc --watch
```

*(Puedes dejar esta terminal abierta trabajando en segundo plano y abrir otra para ejecutar los comandos de Node).*

### 2. Ejecutar el código

Una vez compilado, puedes ejecutar los archivos `.js` resultantes que se encuentran en la carpeta `dist`. Por ejemplo:

```bash
node dist/index.js
``` *(Reemplaza `index.js` por el archivo específico que desees probar).*

---

## 📚 Configurar TypeScript desde cero (Referencia)

Si en el futuro deseas crear otro proyecto de TypeScript desde cero con una configuración similar a este, estos son los comandos que debes utilizar:

1.  **Inicializar un nuevo proyecto Node:**
    ```bash
    npm init -y
    ```
2.  **Instalar TypeScript de forma local (dependencia de desarrollo):**
    ```bash
    npm install typescript --save-dev
    ```
3.  **Generar el archivo de configuración `tsconfig.json`:**
    ```bash
    npx tsc --init
    ```
    *(Luego, en el `tsconfig.json`, se recomienda configurar los campos `"outDir": "./dist"` y `"rootDir": "./src"`).*
