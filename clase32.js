const API_URL = "https://swapi.co/api/";

const PEOPLE_URL = "people/:id";

const lukeurl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true };

function obtenerpersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(url, options, function(data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onerror(id) {
  console.log(`Sucedio un error al cargar el personaje on id = ${id}`);
}

obtenerpersonaje(1)
  .then(function(personaje) {
    console.log(`Hola yo soy ${personaje.name}`);
  })
  .catch(function(id) {
    onerror(id);
  });
