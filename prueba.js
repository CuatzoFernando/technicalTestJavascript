// // diferencia diagonal 

// // dada una matriz cuadrada calcule la diferencia absoluta entre la suma de sus diagonales
// // por ejemplo 
// // 123
// // 456
// // 989

// // la diagoinal de izquierda a derecha =  1+5+9 = 15
// // la diagonal de derecha a izquierda = 3 + 5 + 9 = 17
// // la diferencia absoluta = 15 - 17 = 2

// function diferenceDiagonal (arr) {
//   const tam = arr.length
//   let diagonal1 = 0
//   let diagonal2 = 0

//   for (let i = 0; i < tam; i++) {
//     console.log('primer diagonal', arr[i])
//     diagonal1 += arr[i][i]
//     const variable = tam - 1 - i
//     diagonal2 += arr[variable][i]
//   }
//   console.log('diagonal ----', diagonal1)
//   console.log(' diagonal 2222 ', diagonal2)
//   return Math.abs(diagonal1 - diagonal2)
// }

// const diferens = diferenceDiagonal([[-1,1,-7,-8], [-10,-8,-5,-2], [0,9,7,-1],[4,4,-2,1]])
// console.log('diferencias', diferens)


/////     PRUEBA 2

// si a>b = alice recibe 1 punto
// si b>a = bob recibe 1 punto
// si a = B => no reciben puntos

///// 5,6,7,3,6,10       4,5,9,5,9,8

function puntos (arr) {
  const alice = arr[0]
  const bob = arr[1]

  const res = []
  for (let i = 0; i < alice.length; i++) {
    const a = alice[i]
    for (let j = 0; j < bob.length; j++) {
      const b = bob[j]
      if (i === j) {
        console.log(a, b)
        if (a > b) {
          res.push({ a: 1 })
        }

        if (b > a) {
          res.push({ b: 1 })
        }
      }
    }
  }
  return res
}

const points = puntos([[5,6,7],[3,6,10]])//, [4,5,9,5,9,8]])
console.log('estos son los puntos', points)
