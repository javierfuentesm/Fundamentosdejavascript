const API_URL ='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const lukeurl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const options = {crossDomain:true}

$.get(lukeurl,options,function(luke){

    console.log(`Hola yo soy ${luke.name}`);
})

