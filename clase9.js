var x = 4 ,y='4'

//Doble igualte lelva ambos datos al mismo tipo de dato y los compara

x == y

true

//Triple signo de igual nos sirve cuando queremos comparar no solo que sea o diga lo mismo sino que sea el mismo tipo de variable

x===y

false


var javier = {
    nombre :'Javier'
}


var javier2 = {
    nombre :'Javier'
}

javier==javier2 
false

javier===javier2
false 

//Se obtien true porque e el mismo objeto en memoria ram

var javier = {
    nombre :'Javier'
}


var javier2 =javier

javier==javier2 
true

javier===javier2
true 

///

var javier = {
    nombre :'Javier'
}



var javier2 = {
    ...javier
}

javier==javier2 
false

javier===javier2
false 

