const user = {
  name: 'jeyce',
  idade: 30,
  cidade: 'fortaleza',
  esportes: ['natação', 'surf'],
  login: function (user) {
    console.log(`usuario logado ${user}`)
  }
}

user.login('jey')