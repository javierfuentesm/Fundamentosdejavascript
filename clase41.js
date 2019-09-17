const javier= {
    nombre: 'javier',
    apellido:'fuentes'
}

function saludar(saludo='hola') {
    console.log(`${saludo} mi nombre es ${this.nombre}`);
}

const saludarJavier= saludar.bind(javier)

//setTimeout(saludar.bind(javier,'Que onda hommie'), 1000);

//bind no ejecuta la funcion solo nos devuelve una nueva funcion con ese contexto aplciado

saludar.call(javier,'que onda dude')

saludar.apply(javier,['Que onda paps'])