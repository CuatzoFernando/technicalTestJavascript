/// multiplicar 2 números sin signo de multiplicación
const multiply = (a,b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (let i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a
    }

    return resultado
}

const a = multiply(50, -50)

//  obtener el número mayor de un arreglo, en una iteración

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b  = getBiggest([50, -1500, 1000, 0, 1, 54])
console.log('b', b)

// Eliminar en una iteración los null, undefined, 0 

const clean = (arr) => arr.reduce((acc, el) => {
    if(el)  acc.push(el)
    return acc
}, [])

const c = clean([1, undefined, 0, null, 4, -45])
console.log(c)

// escribir una función que aplane los arreglos en un nivel
 
const arr = [[1,3], [3,34,34,], 7,6,5,4, [3, [4,36,5,8]]]

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log('flatten', d)

// cantidad de veces que se repite una palabra
const repeated = str => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if (acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated(' this is a repeated word test this is a a')
console.log('repeated', e)

// función que verifica si un texto es palindromo

const isPalindrome = (str) => {
    str = str.replace(/\s/g, '') //// regex que significa /g = todas las instancias  \s = espacios  todas las instancias de los espacios == eliminar espacios
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered === joined
}

const palindrome = isPalindrome('Somos o no somos')
console.log('palindromo', palindrome)