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
// 
// let numeros = [10,3,5,3,5,3,2,1,1,4]
// let soma = 0
// numeros.forEach((ev) => {
//     soma += ev
// })
// 
// let media = soma / numeros.length
// 
// 
// 
// let pares = [];
// 
// numeros.forEach(ev => { 
//     if (ev % 2 === 0) { 
//         pares.push(ev);
//     } else {
//         console.log(`${ev} é ímpar`);
//     }
// });
// console.log("a soma é: " + soma)
// console.log("a média é: " + media)
// console.log("Números pares:", pares);


// 
// for (let i = 0; i < numeros.length - 1; i++) {  
//     for (let j = 0; j < numeros.length - 1 - i; j++) {  
//         if (numeros[j] > numeros[j + 1]) {  
//             let temp = numeros[j];  
//             numeros[j] = numeros[j + 1];  
//             numeros[j + 1] = temp;  
//         }  
//     }  
// }  
// 
// console.log(numeros); 

// let lista = ['preto', 'branco', 'vermelho']
// 
// for(i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }
// 
// for(let i in lista) {
//     console.log(lista[i])
// }




// const numeros = [10,9,8,7,6,5,4,3,2,1]
// 
// const soma = numeros.reduce((acumulador, valor) => 
//     acumulador + valor, 0
// )
// 
// const media = soma / numeros.length
// 
// const pares = numeros.filter(num => num % 2 === 0 )
// 
// console.log(soma)
// console.log(media)
// console.log(pares)

let listarCoisas = []

listarCoisas['hardware'] = Array()

listarCoisas['hardware'][0] = 'placa de vídeo'

listarCoisas['hardware'][1] = 'notebook'
listarCoisas['filmes'] = Array()
listarCoisas['filmes'][0] = 'senhor dos aneis'
listarCoisas['filmes'][1] = 'sla'
console.table(listarCoisas['filmes'][0])

function parOuImpar(num) {
    if (num % 2 === 0) {
        return 'par' 
    } else {
        return 'impar'
    }


} 
let impar = parOuImpar(3)

console.log(impar)
arr = [10,3,6,7,32,4]
function bubbleSort() {
     let result = arr.sort((a, b) => a - b)
    return console.log(result)
}
bubbleSort()

let test = function () {
    console.log('teste')
}

test()

function showFunction(sucessCallback, erroCallBack) {
    if(false) {
        sucessCallback('sucess')
    } else {
        erroCallBack('error')
    }
}

let sucessCallback = (message) => {
    console.log(message)

}

let erroCallBack = function (message) {
    console.log(message)
}

showFunction(sucessCallback, erroCallBack)


function somaDosElementos(arr) {
    let soma = 0
    for(i=0; i < arr.length; i++) {
       soma += arr[i]
    }
    return soma
}
console.log(somaDosElementos([3,3]))
let m = 0
function maior(arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > m) {
            m = arr[i]
        }
    }
    return m
}

console.log(maior([3,4,56,200]))