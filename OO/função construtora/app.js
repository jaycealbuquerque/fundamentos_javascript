class Stud {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  escopo = () => this

}

const escopoThis = () => {
  console.log(this)
}

// função construtora
function Student(name, email) {
  this.name = name
  this.email = email

  this.login = function () {
    return `${this.name} logado`
  }
}





const felipe = new Student('felipe', 'felipe@gmail.com')
const joao = new Stud('joao', 'joao@gmail.com')

console.log(joao.escopo())
console.log(felipe.login())

// escopoThis()