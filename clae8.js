var javier = {
    nombre: "Javier",
    apellido: "Fuentes",
    edad: 25
  };
  
  var dario = {
    nombre: "Dario",
    apellido: "mora",
    edad: 27
  };
  
  function imprimirNombreenmatusculas(persona) {
    // Es lo mismo que lo que se muestra abajo  var nombre= persona.nombre
  
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
  }
  
  imprimirNombreenmatusculas(javier);
  imprimirNombreenmatusculas(dario);
  
  function imprimirnombreyedad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad}`);
  }
  
  imprimirnombreyedad(javier);
  imprimirnombreyedad(dario);
  
//      clase 8 Parámetros como REFERENCIA o como VALOR.
// Referencia (parametro):  modifica el valor de la variable definida en el objeto.
// Valor: Creamos un nuevo objeto dentro de la funcion en la cual se modifica el valor de la variable del objeto, pero no al objeto original.
// link referencia: https://codingornot.com/cuando-se-utiliza-paso-por-referencia-y-cuando-paso-por-valor                       

var persona ={
    nombre: 'jose',
    apellido:'calvano',
    edad: 23
}

// Paso por parametro-Referencia
functioncumpleaños(persona){
    persona.edad +=1
}

//Paso por valor
//Se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.
functioncumpleaños2(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}