var javier = {
  nombre: "javier",
  apellido: "Lifszyc",
  edad: 25,
  peso: 70
};

console.log(`al inicio del año ${javier.nombre} pesa ${javier.peso}`);

const INCREMENTO_PESO = 0.3;

const aumentadepeso = persona => (persona.peso += INCREMENTO_PESO);

const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);
const comemucho = () => Math.random() < 0.3;
const realizadeporte = () => Math.random() < 0.4;
const META = javier.peso - 3;
var dias = 0;
while (javier.peso > META) {
  if (comemucho()) {
    aumentadepeso(javier);
  } 
   if (realizadeporte()) {
    adelgazar(javier);
  }
  dias++
}

console.log(`Pasaron ${dias} días hasta que ${javier.nombre} logro la meta`);
