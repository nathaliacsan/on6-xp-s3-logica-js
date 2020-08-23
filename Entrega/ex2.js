// 2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit 
// e chame uma função que converta para Celsius.
// (32 °F − 32) × 5/9 = 0 °C


const read = require("readline-sync")

let temperaturaF = parseFloat(read.question("Digite a temperatura em Fahrenheit: "))

function temperaturaCelsius(temperatura) {
    return ((temperatura - 32) * 5 / 9).toFixed()
}

console.log(`${temperaturaCelsius(temperaturaF)} °C `)