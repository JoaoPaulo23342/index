// antes de tudo 
// npm init
// npm i prompt-sync

/* Escreva um programa que recebe um numero inteiro e verifica se ele é pár ou
impar ultilizando uma estrutura de controle if*/
//--------------------------------------------------------------------------
// let recebe = Number(prompt('Digite o numero que quer verificar: '))
// 
// if (recebe % 2 === 0) {
//     alert('o numero é par')
// } else {
//     alert('o numero é impar')
// }

// -------------------------------------------------------------------

/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

let entrada = Number(prompt('digite sua idade: '))
if(entrada <= 10) {
    alert('você é criança')
} else if (entrada >= 11 || entrada < 18) {
    alert('voce é adolescente')
} else if (entrada >= 18 || entrada < 60) {
    alert('voce é adulto')
} else if (entrada >= 60 || entrada < 120) {
    alert('voce é idoso')
} else {
    alert('digite apenas sua idade sem caracteres especiais')
}