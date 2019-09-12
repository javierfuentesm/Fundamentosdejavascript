var contador=0
const marrana=() => Math.random()<0.25

do {
    contador++
} while (!marrana())


if(contador===1)
console.log(`Fui a ver si ya puso la marrana ${contador} vez`)
else
console.log(`Fui a ver si ya puso la marrana ${contador} veces`)
