// 5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, 
// recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

const read = require('readline-sync')

const numero = parseFloat(read.question("Digite um numero: "))



function somarValores(valor){
    let resultado = 0
    for(let i = 1; i <= valor; i++){
        resultado += i
    }
     return resultado;
}

console.log(somarValores(numero))


