var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56
};

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76
};

//const esalta = persona=>persona.altura>1.8

const esalta = ({ altura }) => altura > 1.8;

//es buena manera sin embargo estamos modificanco el array directamente
/* 
const pasaralturacms = persona => {
  persona.altura = persona.altura * 100
  return persona
};
 */
const pasaralturacms = persona => {
  return {
    ...persona,
    altura: persona.altura * 100
  };
};

const pasaralturacms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasaltas = personas.filter(esalta);
var personascms = personas.map(pasaralturacms);

console.log(personasaltas);

console.log(personascms);
