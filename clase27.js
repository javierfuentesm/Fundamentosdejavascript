var mensaje = document.getElementById('respuesta')

var inspector_preguntas = 0

var puntos = 0
const PUNTAJE_RESPUESTAS_CORRECTAS = 10
const PUNTAJE_RESPUESTAS_INCORRECTAS = 2

const CLAVE_RESPUESTAS_CORRECTAS = [AC1, AC2, AC3]
const CLAVE_RESPUESTAS_INCORRECTAS = [NO1, NO2, NO3, NO4, NO5, NO6]

// Interesante:
console.log(AC1)
console.log(NO3)


var tiempo = document.getElementById('mostrarTiempoTranscurrido')
var segundos = 0
// Generamos un intervalo de tiempo de 1 segundo, para mostrar el tiempo que ha transcurrido desde que inicio la aplicación del examen
var intervalo = setInterval(function(){
    tiempo.textContent = `Tiempo transcurrido: ${++segundos} seg.` 
}, 1000)



// Generamos un proceso que debe de ejecutarse pasado una cierta cantidad de tiempo. En este caso, el examen tiene una duración de 5 segundos, por tanto, debo de empezar a calificar pasado ese periodo de tiempo.
setTimeout(calificadorExamen, 5000)

// Nota importante... puedo recuperar el elemento del DOM con tan solo escribir literalmente el nombre de su ID asignado. Por ejemplo AC1 (javascript lo encuentra en el DOM y sabe que es un elemento cuyo id es ACI, por tanto, puedo hacer directamente AC1.propiedad)
// Es por eso que en los arreglos he colocado el nombre de sus ID

function calificadorExamen() {
    // Recorremos todas las respuestas correctas (puesto que cada pregunta tiene un acierto)
    for (var opcion of CLAVE_RESPUESTAS_CORRECTAS) {
        if (opcion.checked) {
            puntos += PUNTAJE_RESPUESTAS_CORRECTAS
        } else {
            // En caso de que la respuesta actual no sea correcta, verificamos si el usuario selecciono otra respuesta, o la dejo nula
            for (var i = inspector_preguntas; i < inspector_preguntas + 2; i++) {
                if (CLAVE_RESPUESTAS_INCORRECTAS[i].checked) {
                    puntos -= PUNTAJE_RESPUESTAS_INCORRECTAS
                }
            }
        }
        // El inspector de preguntas juega un papel importante (es como un puntero), ya que se posiciona en los indices correctos para respuestas incorrectas de cada pregunta. Al inicio comienza en 0 (para la pregunta 1), posteriormente se posiciona en 2 (para la pregunta 2). Matematicamente hablando cada pregunta tiene 2 respuestas incorrectas, entonces para cada pregunta debo saltar a las siguientes 2 y así sucesivamente
        inspector_preguntas +=2
    }
    mensaje.innerHTML = `Usted obtuvo ${puntos} puntos. Gracias por participar`
    clearInterval(intervalo)

    // Si el puntaje es acreditable, creo un enlace para que el usuario descargue su certificado 
    if(puntos > 18) {
        const a = document.createElement('a')
        const texto = document.createTextNode('Descarga tu certificado')
        a.appendChild(texto)
        a.href="https://platzi.com/certificado.pdf"
        document.body.appendChild(a)
    }
}
