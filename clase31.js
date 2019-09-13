const API_URL ='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const lukeurl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const options = {crossDomain:true}



function obtenerpersonaje(id,callback){

    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,options,callback).fail(function () {
        console.log(`Sucedio un error No se pudo obtener el personaje deseado ${id}`);
    })


}

obtenerpersonaje(1,function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`);
    obtenerpersonaje(2,function (personaje) {
        console.log(`Hola yo soy ${personaje.name}`);

        obtenerpersonaje(3,function (personaje) {
            console.log(`Hola yo soy ${personaje.name}`);

            obtenerpersonaje(4,function (personaje) {
                console.log(`Hola yo soy ${personaje.name}`);

                obtenerpersonaje(5,function (personaje) {
                    console.log(`Hola yo soy ${personaje.name}`);

                    obtenerpersonaje(6,function (personaje) {
                        console.log(`Hola yo soy ${personaje.name}`);

                    })
                })
            })
        })
    })
})
