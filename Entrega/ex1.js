// 1. Crie uma função que receba uma temperatura em Celsius 
// e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const read = require("readline-sync")

let temperaturaC = parseFloat(read.question("Digite a temperatura em Celsius: "))

function temperaturaFahrenheit(temperatura) {
    return ((9 * temperatura) / 5 + 32)
}

console.log(`${temperaturaFahrenheit(temperaturaC)} °F `)