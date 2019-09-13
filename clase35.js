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

async function obtenerpersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map(id => obtenerpersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onerror(id);
  }
}

obtenerpersonajes();

/* obtenerpersonaje(1)
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(2)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(3)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(4)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(5)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(6)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(7)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(8)

  })
  .then(personaje=> {
    console.log(`Hola yo soy ${personaje.name}`);
    return obtenerpersonaje(9)

  })

  .catch(onerror);
 */
