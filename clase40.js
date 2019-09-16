function crearSaludo(finaldelafrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finaldelafrase}`);
    }
}


const saludoargentico= crearSaludo('che')
const saludomexicano= crearSaludo('compa')
const saludocolombiano= crearSaludo('parse')

saludoargentico('Javier')
saludocolombiano('Javier')
saludomexicano('Javier')