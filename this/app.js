const user = {
  name: 'jeyce',
  idade: 30,
  cidade: 'fortaleza',
  esportes: ['natação', 'surf'],
  escopoThis: () => {
    console.log(this)
  },
  escopoThisShortcut() {
    console.log(this)
  },
  listaEsportes: function () {
    this.esportes.forEach(sport => {
      console.log(`${this.name} pratica ${sport}`)
    })
  }
}

console.log(this)
user.escopoThis()
user.escopoThisShortcut()
user.listaEsportes()


