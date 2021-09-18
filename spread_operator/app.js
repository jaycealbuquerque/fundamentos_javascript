const arr1 = [3, 4, 5]
const arr2 = [7, 8, 9]

const newArr = [0, 1, 2, ...arr1, 6, ...arr2]
console.log(newArr)


const obj1 = { numero1: 1, numero2: 2 }
const obj2 = { numero3: 3, numero4: 4 }

const obj3 = { ...obj1, ...obj2 }

console.log(obj3)



const strin = 'jayce'

const revertStrin = string => [...string].reverse().join('')


console.log(revertStrin(strin))


const numeros = [2, 54, 57, 565, 15, 6, 7, 98, 45]

console.log(...numeros)
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))
