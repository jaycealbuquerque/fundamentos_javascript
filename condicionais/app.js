let idade = 18

if (idade >= 18) {
  console.log("Você é obrigado a votar");
} else {
  console.log("Você não é obrigado a votar");
}

let idade1 = 15

if (idade1 >= 15 && idade1 < 18 || idade1 >= 70) {
  console.log("O voto é opcional");
}


let media = 1

if (media <= 5) {
  console.log('ruim')
} else if (media > 5 && media <= 7) {
  console.log('bom')
} else if (media >= 8 && media <= 10) {
  console.log('muito bem')
} else {
  console.log('media invalida')

}

let signo = 'Virgem';

switch (signo) {
  case 'Áries':
    console.log("De 21 março a 20 abril");
    break;
  case 'Touro':
    console.log("de 21 abril a 20 maio");
    break;
  case 'Gêmeos':
    console.log("de 21 maio a 20 junho");
    break;
  case 'Câncer':
    console.log("de 21 junho a 22 julho");
    break;
  case 'Leão':
    console.log("de 23 julho a 22 agosto");
    break;
  case 'Virgem':
    console.log("de 23 agosto a 22 setembro");
    break;
  default:
    console.log("Signo não registrado");
    break;
}


