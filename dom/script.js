let prompt = require('prompt-sync')()
let turmaC = 60
let turmaD = 20
let reprovados = 30
let percentualC = (turmaC / (turmaC + turmaD + reprovados)) * 100
let percentualD = (turmaD / (turmaC + turmaD + reprovados)) * 100
let percentualReprovados = (reprovados / totalAlunos) * 100

console.log(`o percentual de alunos reprovados na turma C é ${percentualC}`)
console.log(`o percentual de alunos reprovados na turma D é ${percentualD}`)
console.log(`o percentual de alunos reprovados é ${percentualReprovados}`)

