function Persona(nombre,apellido){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura

}

Persona.prototype.saludar = function() {console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)}; 

Persona.prototype.soyalto = function() {return this.altura>1.8}; 


var javier = new Persona('Javier','Fuentes',1.64)

