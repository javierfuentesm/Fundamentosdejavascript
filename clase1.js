
//Primera Clase

// imprimir un mensaje por consola.
console.log('hola mundo JS')
//Crear una variable. 
var nombre
// En la consola podemos interactuar con las variables definidas anteriormente.

/* Podemos asignarle un valor ala variable "en este caso un string" las comillas simples ('')
y las dobles son indistintas(""). Por convención se utiliza 'SIMPLE'*/
nombre = 'Javier'
//Si nos dirigimos ala consola podremos notar que el valor de la variable cambio a'Jose'.
//La utilización del ; es algo opcional

// definir y asignar valor ala variable.
var apellido = 'Fuentes'
//Utilizando la variable, enla consola.
console.log('Hola ' + nombre + ' '+ apellido)

//JS es un lenguaje debilmente tipado.
/* Los lenguajes de programación no tipados o débilmente tipados no controlan 
los tipos de las variables que declaran, de este modo, es posible usar variables 
de cualquier tipo en un mismo escenario. Por ejemplo, una función puede recibir 
como parámetro un valor entero, cadena de caracteres, flotante, etc.*/

var edad = 23
edad = '23 años'
console.log('Tengo ' + edad);