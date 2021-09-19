class Mammal {
  constructor(species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge() {
    this.age++
    return this.age
  }
}

class Lion extends Mammal {
  constructor(species, name, age, manEater) {
    super(species, name, age)
    this.manEater = manEater
  }

  eatZebras(animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const zeca = new Mammal('zebra', 'zeca', 6)
const pompeu = new Mammal('gnu', 'popeu', 5)
const angus = new Mammal('cavalo', 'angus', 3)
const mufasa = new Lion('leao', 'mufasa', 6, false)

const animals = [zeca, pompeu, angus]

console.log(zeca.incrementAge())
console.log(mufasa)
console.log(mufasa.eatZebras(animals))
