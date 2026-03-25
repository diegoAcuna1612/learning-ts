// Item 7: Pensar en los tipos como conjuntos de valores
//never: Conjunto vacio, no tiene valores 
//Tipos literales: Un conjunto, un elemento (Ejm: "A")
//Uniones: Union de conjuntos (Ejm: "A" | "B")
//Asignables: extends. Subconjunto de:
    //Interfaz PersonaVida tiene mas propiedades que Persona, pero en TS
    //mas propiedades = conjunto mas pequeño (SOLO CON INTERFACES)
    //PersonaConVida extends Persona -> PersonaConVida es un subconjunto de Persona

//Esto no es una interfaz, NO APLICA LA REGLA DE mas propiedades, son tipos
type SoloStrings = string;
type StringONumero = string | number;

//StringONumero es un superconjunto de SoloStrings
//SoloStrings es un subconjunto de StringONumero

