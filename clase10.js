var javier = {
    nombre: 'javier',
    apellido: 'Lifszyc',
    edad: 25,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
  }
  
  function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
  
    if (persona.ingeniero) {
      console.log('Ingeniero')
    } else {
      console.log('No es ingeniero')
    }
  
    if (persona.cocinero) {
      console.log('Cocinero')
    }
  
    if (persona.dj) {
      console.log('DJ')
    }
  
    if (persona.cantante) {
      console.log('Cantante')
    }
  
    if (persona.guitarrista) {
      console.log('Gutiarrista')
    }
  
    if (persona.drone) {
      console.log('Piloto de drone')
    }
  
  }
  
  imprimirProfesiones(javier)




const MAYORIA_DE_EDD =18

  function esmayordeedad(persona){
      return persona.edad >=MAYORIA_DE_EDD
  }

  function imprimirsiesmayordeedad(persona){

    if(pesmayordeedad(persona)) 
    {
        console.log('Eres mayor de edad')

    }
    else{
        return console.log("Eres menor de edad")


    }
  }

  imprimirsiesmayordeedad(javier)

