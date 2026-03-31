// Item 14: Usar genricos y operaciones de tipos para evitar la repeticin (Pick, Partial, ReturnType)

//extends: herencia de interfaces

    interface Juego{
        titulo:string;
        genero:string;
    }

    //No tengo que crear otra interfaz para repetir campos comunes, uso extends
    interface JuegoOnline extends Juego{
        servidor:string;
        jugadoresActivos:number;
    }

    const minecraft:JuegoOnline= {
        titulo : 'Minecraft',
        genero: 'Sandbox', 
        servidor : 'Mojang', 
        jugadoresActivos:1000
    }

    console.log(minecraft);

//Indexacion(Lookup Types)
//Necesito que una variable tenga el mismo tipo de una propiedad de una interfaz

    type TituloDeJuego= Juego['titulo'];
    const zelda:TituloDeJuego= 'Zelda'
    console.log(zelda);

//Pick<T,K> Seleccion

    type ResumenJuego = Pick<Juego,'titulo'| 'genero'>;
    const mario:ResumenJuego={
        titulo:'Mario Bros',
        genero:'Plataforma'
    }
    console.log(mario);

//keyof (Union de llaves)
    type PropiedadesJuego = keyof Juego;
    const idk:PropiedadesJuego= "titulo"

    console.log(idk)

//Partial<T> (Todo opcional)

    function actualizarJuego(id:string,cambios:Partial<Juego>){
        //cambios tendra titulo, genero, ambos o ninguno
    }

//typeof (De Valor a Tipo)

    const JUEGO_POR_DEFECTO = {
    titulo: "Sin nombre",
    genero: "Aventura",
    puntuacion: 0
    };

    //Creara un tipo basado en la estructura del objeto
    type JuegoBase = typeof JUEGO_POR_DEFECTO;

//ReturnType<T> (Retornar una funcion)

    function crearPersonaje() {
        return { nombre: "Guerrero", nivel: 1, vida: 100 };
    }

    // Obtenemos el tipo que la función devuelve
    type Personaje =ReturnType<typeof crearPersonaje>;
