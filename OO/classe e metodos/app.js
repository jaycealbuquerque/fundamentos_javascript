class User {
  // propriedades
  constructor(name, sobrenome) {
    this.name = name
    this.sobrenome = sobrenome
    this.points = 0
  }
  // métodos
  login() {
    console.log(`${this.name} está logado`)
    return this
  }
  addPoin() {
    this.points++
    return `${this.name} tem ${this.points > 1 ? 'pontos' : 'ponto'}`

  }
}

const name1 = new User('jeyce', 'albuquerque')


name1.login().addPoin()
console.log(name1)