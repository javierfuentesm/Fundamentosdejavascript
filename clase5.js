var nombre =' Javier'

//Forma no corrcta porque modificamos la variable global
function imprimirNombreenmatusculas(){
    nombre= nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreenmatusculas()


//Forma correcta

function imprimirNombreenmatusculas(n){
    n= n.toUpperCase()
    console.log(n)
}

imprimirNombreenmatusculas(nombre)