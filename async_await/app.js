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