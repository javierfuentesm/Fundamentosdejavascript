const API_URL ='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const lukeurl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const options = {crossDomain:true}
const onpeopleresponse = function(luke){

    console.log(`Hola yo soy ${luke.name}`);
}


function obtenerpersonaje(id){

    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,options,onpeopleresponse)



}

obtenerpersonaje(1)
obtenerpersonaje(2)
obtenerpersonaje(3)
obtenerpersonaje(4)