// const numbers = [1,2,3]

// const doubleNunber = numbers.map(itens => itens * 2)

// console.log(doubleNunber, numbers)

// const prices = [20, 10, 30, 25, 15, 40, 80, 5]

// const salesPrices = prices.map(price => price / 2)

// console.log(salesPrice)


const products = [
  {name: 'mouse' , price: 30},
  {name: 'pen drive' , price: 25},
  {name: 'cartucho' , price: 50},
  {name: 'suporte para notebook ' , price: 23},
  {name: 'roteador' , price: 40},
]
const products2 = [
  {name: 'mouse' , price: 30},
  {name: 'pen drive' , price: 25},
  {name: 'cartucho' , price: 50},
  {name: 'suporte para notebook ' , price: 23},
  {name: 'roteador' , price: 40},
]

// cria um novo array
const desconto = products.map(product => {
  if (product.price >= 30){
  return {name: product.name, price: product.price / 2}
  } return product;
});

// altera o array original
const desconto2 = products2.map(product => {
  if (product.price >= 30){
   product.price = product.price / 2
   return product
  } return product;
});


console.log(products, desconto, products2, desconto2)