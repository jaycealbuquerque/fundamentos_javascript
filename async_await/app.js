const getuser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}

console.log(getuser())


const logUser = async () => {
  const user = await getuser()
  console.log(user)
}


logUser()


const listUser = async () => {
  const users = await getuser()

  const names = await users.map(user => user.name)
  console.log(names)

}

listUser(1)



// --------------------------------------- request paralelo-------------------------------

const getPokemon = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')


  const result = await Promise.all([bulbasaur, charmander, squirtle])
  result.forEach(async response => console.log(await response.json()))
}


getPokemon()