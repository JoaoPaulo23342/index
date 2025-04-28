
let f = parseFloat(prompt('digite a temperatura em fahrenheit'))
let c = (f - 32) * 5 / 9
console.log(`A temperatura em Celsius é ${c}`)

let ler = prompt('digite o número de eleitores')
let ler2 = prompt('digite o número de votos brancos')
let ler3 = prompt('digite o número de votos nulos')
let ler4 = prompt('digite o número de votos válidos')

let percentualBrancos = (ler2  / ler) * 100
let percentualNulos = (ler3  / ler) * 100
let percentualValidos = (ler4  / ler) * 100


console.log(`O percentual de votos nulos é ${percentualNulos}`)
console.log(`O percentual de votos brancos é ${percentualBrancos}`)
console.log(`O percentual de votos válidos é ${percentualValidos}`)


