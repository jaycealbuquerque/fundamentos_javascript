let multi = 0

while (multi <= 10) {
  console.log(`1 X ${multi} = ${2 * multi}`)
  multi++
}


let contador = 0;

do {
  console.log("O contador vale: " + contador);
  contador++;
} while (contador == 1)

let numeros = [5, 5, 5, 5, 5, 5]

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * i
  console.log(numeros[i]);
}


// O for…in é utilizado para percorrer as propriedades de um objeto
let carro = {
  marca: 'ford',
  modelo: 'fiesta',
  cor: 'prata',
}

for (propriedade in carro) {
  console.log(propriedade);
}
for (propriedade in carro) {
  console.log(carro[propriedade]);
}

for (prop in carro) {
  console.log(prop + ': ' + carro[prop])
}



// O for…of utilizado para percorrer objetos iteráveis como 
// Maps, Sets e Vetores de forma simples e eficaz
let carros = ['fiesta', 'onix', 'fusca', 'saveiro'];

for (let carro of carros) {
  console.log(carro);
}


for (let [index, carro] of carros.entries()) {
  console.log(index, carro);
}

