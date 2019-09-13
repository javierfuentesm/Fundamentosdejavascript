function heredade(prototipohijo,prototipopadre){
    var fn= function(){
    fn.prototype=prototipopadre.prototype  
    prototipopadre.prototype = new fn
    prototipohijo.prototype.constructor =prototipohijo
    }
}


function Persona(nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura

}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}; 

Persona.prototype.soyalto = function() {return this.altura>1.8}; 

function Desarrollador(nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido

}

heredade(Desarrollador,Persona)

Desarrollador.prototype.saludar= function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
}


var javier = new Persona('Javier','Fuentes',1.64)

