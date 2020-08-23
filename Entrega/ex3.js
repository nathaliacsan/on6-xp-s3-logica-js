// 3. Faça um programa que receba um valor em metros e
// chame uma função que converta em milímetros.

const read = require("readline-sync")

let metros = parseFloat(read.question("Digite a quantidade em metros: "))

function metroParaMilimetro(metro) {
    return (metro * 1000).toFixed()
}

console.log(`${metroParaMilimetro(metros)} milimetros `)