// Item 10: Evitar los tipos wrapper de objetos (String, Number, Boolean, Symbol, BigInt)

//Primitivos como string,number,boolean,etc son inmutables y no tienen metodos
//Wrapper(Objetos Envoltorios) Sirve para darle metodos a los primitivos
//  Crea una caja alrededor de un primitivo para darle propiedades y metodos, al final tira la caja a la basura.

function isGreeting(phrase: String) { // ❌ Error de diseño: usa 'String'
  return ['hello', 'good day'].includes(phrase);
  // ~~~~~~ Error: 'String' no es asignable a 'string'
}



