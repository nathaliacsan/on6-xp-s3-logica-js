// 1. Crie uma função que receba uma temperatura em Celsius 
// e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const read = require("readline-sync")



function temperaturaCelsius() {
    return parseFloat(read.question("Digite a temperatura em Celsius: "))
}

function temperaturaFahrenheit() {
    let temperaturaEmCelsius = temperaturaCelsius()
    return ((9 * temperaturaEmCelsius) / 5 + 32)
}

console.log(`${temperaturaFahrenheit()} °F `)