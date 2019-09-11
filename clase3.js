var edad=25

//Incremento
edad +=1

var peso=70
peso= peso-2

peso -= 2


var sandwich = 1

peso =peso + sandwich

var jugarbasketball= 3

peso-=jugarbasketball

var preciodeagua = 200.3


// Nos da un resultado impreciso ya que JS no es muy bueno con los decimales 
var total= preciodeagua*3
// Para corregirlo se hace asi solo i tuviera un decimal
var total = preciodeagua*100* 3 /100


//asi que se usa esto

var total = Math.round(preciodeagua*100* 3 )/100

//El numero de decimals que queremos

var totalstr= total.toFixed(2)

//Para pasar a float de neuvo
var total2 = parseFloat(totalstr)


//Division

var pizza=8
var persona = 2
var cantidaddeporcionesporpersona =pizza/persona