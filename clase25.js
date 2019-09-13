class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
     }
     saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)

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
     saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy ${this.develop}`)

     }
}





var javier = new Desarrollador('Javier','Fuentes',1.64)

