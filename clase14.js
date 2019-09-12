var javier = {
  nombre: "javier",
  apellido: "Lifszyc",
  edad: 25,
  peso: 70
};

console.log(`al inicio del año ${javier.nombre} pesa ${javier.peso}`);

const INCREMENTO_PESO = 0.2;

const aumentadepeso = persona => (persona.peso += INCREMENTO_PESO);

const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= 365; i++) {
  var random = Math.random();
  if (random < 0.25) {
      aumentadepeso(javier)
  } else if (random < 0.5) {
      adelgazar(javier)
  }
}

console.log(`al fin del año ${javier.nombre} pesa ${javier.peso.toFixed(2)}`);
