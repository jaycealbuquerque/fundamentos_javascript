const numeros = [1,2,3]

const somaNumeros = numeros.reduce((acumulador, item) => acumulador + item, 0)

console.log(somaNumeros)


const phaseScore = [
  {name: 'jeyce', score: 80},
  {name: 'carla', score: 420},
  {name: 'jeyce', score: 130},
  {name: 'julia', score: 250},
  {name: 'jeyce', score: 420},
  {name: 'carla', score: 156},
]

const jeyceScore = phaseScore.reduce((acc, item) => {
  if(item.name === 'jeyce') {
    acc += item.score
  }
  return acc
},0)

console.log(jeyceScore)



const movimentaçoes = [
  {nome: 'freela', valor: 2000, tipo: 'entrada'},
  {nome: 'mercado', valor: 400, tipo: 'saida'},
  {nome: 'trabalho pj', valor: 8000, tipo: 'entrada'},
  {nome: 'aluguel', valor: 2000, tipo: 'saida'},
  {nome: 'internet', valor: 150, tipo: 'saida'},
  {nome: 'investimentos', valor: 1500, tipo: 'entrada'},
  {nome: 'energia', valor: 200, tipo: 'saida'},
  {nome: 'lazer', valor: 1800, tipo: 'saida'},
]

  const finanças = movimentaçoes.reduce((acumulador, movimentaçao) => {
    if (movimentaçao.tipo === 'entrada') {
      acumulador.entrada += movimentaçao.valor;
      acumulador.total += movimentaçao.valor;
    } else{
      acumulador.saida += movimentaçao.valor;
      acumulador.total -= movimentaçao.valor;
    }

    return acumulador;
  },  {
    entrada: 0,
    saida: 0,
    total: 0,
  })

  console.log(finanças)