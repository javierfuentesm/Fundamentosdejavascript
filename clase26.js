class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
     }
     saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {

            fn(this.nombre,this.apellido)
        }

     }
     soyalto(){

        return this.altura>1.8

     }
    }

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        this.develop='desarrollador'
     }
     saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy ${this.develop}`)
        if (fn) {

            fn(this.nombre,this.apellido,true)
        }

     }
}


function respondersaudo(nombre,apellido,esdev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esdev){
        console.log('Àh mira no sabia que eras dev');

    }
}


var javier = new Desarrollador('Javier','Fuentes',1.64)
javier.saludar(respondersaudo)

