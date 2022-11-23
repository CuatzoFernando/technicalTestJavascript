// convertir libras a kg   lb/2.2046
let libras = 160
let kg = libras / 2.2046

kg *= 100
kg = Math.round(kg)
kg /= 100

console.log(kg)

//// área de triangulo rectangulo
// let area = (base * altura) / 2

let arreglo = [3,3,4,55,6]
let numeroMayor = Math.max(...arreglo)

console.log('numero mayor', numeroMayor)


for (let i = 1; i <= 5; i++) {
    let renglon = ''
    for (let j = 1; j <= 5; j++) {
        renglon += `${ j * i} `
    }
    console.log(renglon)
}