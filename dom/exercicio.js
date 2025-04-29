// antes de tudo 
// npm init
// npm i prompt-sync
// ou apenas inicie o arquivo html e descomente o exercicio que quer executar

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
//--------------------------------------------------------------
// let entrada = Number(prompt('digite sua idade: '))
// if(entrada <= 10) {
//     alert('você é criança')
// } else if (entrada >= 11 && entrada < 18) {
//     alert('voce é adolescente')
// } else if (entrada >= 18 && entrada < 60) {
//     alert('voce é adulto')
// } else if (entrada >= 60 && entrada < 120) {
//     alert('voce é idoso')
// } else {
//     alert('digite apenas sua idade sem caracteres especiais')
// }

//-------------------------------------------

/* Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/
// -----------------------------------------------------------------------

let nota = Number(prompt('digite uma nota de 0 a 10'))

if (nota >= 7) {
    alert('aprovado')
} else if (nota <= 6 && nota > 5) {
    alert('recuperação')
} else if (nota <= 5) {
    alert('reprovado!!')
} else {
    alert('digite um caractere válido.')
}