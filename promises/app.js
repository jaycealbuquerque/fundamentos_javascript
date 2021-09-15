const getData = () => {
  return new Promise((resolve, reject) => {
    //resolve('dado aki agora')
    reject('erro aki')
  })
}

getData()
  .then(valor => console.log(valor)) //metodo then é responsalver port receber a resposta de sucesso da promise
  .catch(error => console.log(error))//quando o resultado da promise nao for uma resposta de sucesso


// -------------------------------- SEGUNDO EXEMPLO ----------------------------------------------------


const getPoke = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isReqestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isReqestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }
    if (isRequestNotOk) {
      reject('não foi possivel obter dados')
    }
  })
  request.open('GET', url)
  request.send()
})

getPoke('https://pokeapi.co/api/v2/pokemon/1')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error))


// -------------------------------- TERCEIRO EXEMPLO ----------------------------------------------------


const getPokemon = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isReqestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isReqestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }
    if (isRequestNotOk) {
      reject('não foi possivel obter dados')
    }
  })
  request.open('GET', url)
  request.send()
})

//encadeamento de Promises
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(squirtle => console.log(squirtle))
  .catch(error => console.log(error))