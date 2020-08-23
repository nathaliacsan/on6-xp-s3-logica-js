// . Crie uma função com as seguintes características:
//    - A função deve receber 3 parâmetros.
//    - Se somente um argumento for passado, retorne o valor do argumento.
//    - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
//    - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
//    - Se nenhum argumento for passado, retorne "não recebeu parâmetro"

const read = require("readline-sync")

const valor1 = parseFloat(read.question("Digite o primeiro parâmetro: "))
const valor2 = parseFloat(read.question("Digite o segundo parâmetro: "))
const valor3 = parseFloat(read.question("Digite o terceiro parâmetro: "))

function calculo (parametro1, parametro2, parametro3) {
    if (parametro1 && !parametro2 && !parametro3) 
        return parametro1
    if (!parametro1 && parametro2 && !parametro3)
        return parametro2
    if (!parametro1 && !parametro2 && parametro3)
        return parametro3
    if (parametro1 && parametro2 && !parametro3)
        return parametro1 + parametro2
    if (parametro1 && !parametro2 && parametro3)
        return parametro1 + parametro3
    if (parametro1 && parametro2 && !parametro3)
        return parametro2 + parametro1
    if (!parametro1 && parametro2 && parametro3)
        return parametro2 + parametro3
    if (parametro1 && !parametro2 && parametro3)
        return parametro3 + parametro1
    if (!parametro1 && parametro2 && parametro3)
        return parametro3 + parametro2
    if (parametro1 && parametro2 && parametro3)
        return (parametro1 + parametro2) / parametro3
    if (!parametro1 && !parametro2 && !parametro3)
        return "Não recebeu parâmetro"
    
}

console.log(calculo(valor1, valor2, valor3))