// antes de tudo 
// npm init
// npm i prompt-sync
// ou apenas inicie o arquivo html e descomente o exercicio que quer executar
// Certifique-se de descomentar a linha 11 se quiser usar o node.js para executar


/* Escreva um programa que recebe um numero inteiro e verifica se ele é pár ou
impar ultilizando uma estrutura de controle if*/

const prompt = require('prompt-sync')()
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
// const prompt = require('prompt-sync')()
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

// const prompt = require('prompt-sync')()
// let nota = Number(prompt('digite uma nota de 0 a 10'))
// 
// if (nota >= 7) {
//     alert('aprovado')
// } else if (nota <= 6 && nota > 5) {
//     alert('recuperação')
// } else if (nota <= 5) {
//     alert('reprovado!!')
// } else {
//     alert('digite um caractere válido.')
// }

//---------------------------------------------------

/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
// const prompt = require('prompt-sync')()
// let arr = []
// let menu;
// do {
//     menu = prompt('escolha uma dessas opções \n 1.cadastrar usuário\n 2.listar usuários \n 3.alterar usuário \n 0.Sair')
//     switch (menu) {
//         case '1':
//             let cadastro = prompt('Digite o nome do usuário: ')
//             arr.push(cadastro)
//             break;
//         case '2':
//             alert(arr)
//             break;
//         case '3':
//             let nomeUsuarioAlterado = prompt('Digite o nome do usuário')
//             let posicaoDoUsuário = Number(prompt('digite a posição do usuário que vc quer trocar: '))
//             arr[posicaoDoUsuário] = nomeUsuarioAlterado
//     
//     
//     }
// } while (menu != '0')
//---------------------------------------------------------------------

/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */
// const prompt = require('prompt-sync')()
// let peso = parseFloat(prompt('qual é seu peso? '))
// let altura = parseFloat(prompt('qual a sua altura? '))
// 
// let imc = peso / (altura ** 2)
// 
// if (imc < 16) {
//     console.log('magresa grave')
// } else if (imc >= 16 && imc < 17) {
//     console.log('magresa moderada')
// } else if (imc >= 17 && imc < 18.5) {
//     console.log('magresa leve')
// } else if (imc >= 18.6 && imc < 24.9) {
//     console.log('peso ideal')
// } else if (imc >= 25 && imc < 29.9) {
//     console.log('sobrepeso')
// } else if (imc >= 30 && imc <= 34.9) {
//     console.log('Obesidade grau 1')
// } else {
//     console.log('Digite caractere válido')
// }

// ----------------------------------------------

/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

// let A = Number(prompt('Digite o primeiro valor do triangulo'))
// let B = Number(prompt('Digite o segundo valor do triangulo'))
// let C = Number(prompt('Digite o terceiro valor do triangulo'))
// 
// 
// if (A == B || A == C || B == C) {
//     console.log('é um triangulo isóceles')
// } else if (A !== B && B !== C) {
//     console.log('é um triangulo escaleno')
// } else if (A === B && B === C) {
//     console.log('é um triangulo equilatero')
// }
// else {
//     console.log('digite um valor válido')
// }
 
//-----------------------------------------------

/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

// let macas = 0.30;
// let macasDuzias = 0.25
// let macasCompradas
// 
// do {
//     macasCompradas = Number(prompt('digite o número de maças que deseja comprar Obs: se quiser sair digite 0  '))
//     
//     let total = macas * macasCompradas
//     let totalFormatado = total.toFixed(2).replace('.', ',')
//     let macasFormatadas = macas.toFixed(2).replace('.',',')
//     let macasFormatadasDuzia = macasDuzias.toFixed(2).replace('.',',')
//     
//     if(macasCompradas < 12) {
//         console.log(`o total da compra deu R$${totalFormatado} Reais\n total de maças: ${macasCompradas}\n preço das maças R$${macasFormatadas} Reais `)
//     } else if (macasCompradas >= 12 ) {
//         console.log(`o total da compra deu R$${totalFormatado} Reais\n total de maças: ${macasCompradas}\n preço das maças R$${macasFormatadasDuzia} Reais `)
//     } else {
//         console.log('digite um caractere válido')
//     }
// } while (macasCompradas !== 0)
// --------------------------------------------------------

/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

// let valor1 = parseInt(prompt("Digite o primeiro valor: "));
// let valor2 = parseInt(prompt("Digite o segundo valor: "));
// 
// if (valor1 < valor2) {
//     console.log(valor1, valor2);
// } else {
//     console.log(valor2, valor1);
// }

//------------------------------------------------

/* Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for. */ 

// for (i = 10; i >= 1; i--) {
//     console.log(i)
// }

// --------------------------

/* Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

// let numInt = Number(prompt('Digite um numero Inteiro ' ))
// 
// for (i = 1; i <= 10; i++) {
//     console.log(numInt)
// }

// -------------------------------------------------------

/* Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

// for (i = 1; i <= 5; i++) {
//     let pedir = Number(prompt('Digite um número'))
//     pedir = pedir
//     if (i === 5) {
//         console.log(pedir )
//     }
// }

// ---------------------------------------------------------------

/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

// let num = Number(prompt('Digite o número que vc quer multiplicar até 10: '))
// 
// for(i = 1; i <= 10; i++) {
//     let soma = num * i
//     console.log(`${num} x ${i} = ${soma}`)
// }
//-----------------------------------

/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/
// let count = 0;
// let soma = 0;
// let continuar;
// 
// do {
//     let num1 = Number(prompt('Digite o primeiro número: '));
//     let num2 = Number(prompt('Digite o segundo número: '));
//     let num3 = Number(prompt('Digite o terceiro número: '));
// 
//     soma += num1 + num2 + num3;
//     count += 3;
// 
//     let media = soma / count;
//     console.log(`A média aritmética simples = ${media}`);
// 
//     continuar = prompt('Deseja continuar? Digite 0 para sair ou qualquer outro caractere para continuar: ');
// 
// } while (continuar !== '0');
// 
//-----------------------------------------------------------------------

/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/
