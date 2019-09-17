function crearSaludo(finaldelafrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finaldelafrase}`);
    }
}


const saludoargentico= crearSaludo('che')
const saludomexicano= crearSaludo('compa')
const saludocolombiano= crearSaludo('parse')

saludoargentico('Javier')
saludocolombiano('Javier')
saludomexicano('Javier')

const nicolas = {
	altura : {
		valor: 170,
		unidad: 'cm'
	},
	nombre: 'Nicolás'
}

const nicolasClon = {
	...nicolas
}

//Si después queremos modificar por ejemplo el valor de la altura del clon
nicolasClon.altura.valor = 180
//También estamos modificando la altura del objeto nicolas

console.log(nicolasClon.altura.valor) //180
console.log(nicolas.altura.valor) //180


//Una truco que puedes usar para copiar objetos y sean inmutables sin importa que hayan objetos nested es primero hacerle un JSON.parse(JSON.stringify(objeto)) a el objeto que quieras copiar.

//Modificando la función de sacha quedaría así:

const compleanosInmutable = persona => {
	persona = JSON.parse(JSON.stringify(persona))
	return {
		...persona
		edad: persona.edad + 1
	}
}