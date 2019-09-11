var nombreJavier= 'Javier'
var nombreDarios = 'Dario'

function imprimirNombreenmatusculas(n){
    n= n.toUpperCase()
    console.log(n)
}

imprimirNombreenmatusculas(nombreJavier)
imprimirNombreenmatusculas(nombreDarios)

//CON OBJETOS

var javier={
    nombre: 'Javier',
    apellido:'Fuentes',
    edad:25
}



var dario={
    nombre: 'Dario',
    apellido:'mora',
    edad:25
}

function imprimirNombreenmatusculas(persona){

    var nombre= persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreenmatusculas(javier)
imprimirNombreenmatusculas(dario)

//ACCEDEINDOAL OBJETO DESDE QUE LO RECIBIMOS EN LA FUNCION


function imprimirNombreenmatusculas({nombre}){

    var nombre= persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreenmatusculas(javier)
imprimirNombreenmatusculas(dario)

imprimirNombreenmatusculas({nombre:'Pepito'})