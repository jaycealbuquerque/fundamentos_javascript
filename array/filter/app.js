const randonNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randonNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)


const user = [
  {name: 'jeyce', premium: true },
  {name: 'joel', premium: false },
  {name: 'pedro', premium: true },
  {name: 'vilma', premium: true },
  {name: 'jesse', premium: false },
  {name: 'kelly', premium: false },
]

const usersPrimium = user.filter(user => user.premium)

console.log(usersPrimium)

