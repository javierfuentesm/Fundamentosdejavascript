const API_URL ='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const lukeurl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const options = {crossDomain:true}



function obtenerpersonaje(id,callback){

    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,options,function(personaje){

        console.log(`Hola yo soy ${personaje.name}`);
        if (callback) {
            callback()
            
        }
    })



}

obtenerpersonaje(1,function () {
    obtenerpersonaje(2,function () {
        obtenerpersonaje(3,function () {
            obtenerpersonaje(4,function () {
                obtenerpersonaje(5,function () {
                    obtenerpersonaje(6)
                })
            })
        })
    })
})
