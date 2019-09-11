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
