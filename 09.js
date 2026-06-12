const prompt = require('prompt-sync')()
console.log("ORDENADOR CRESCENTE");
console.log("--------------------");
let a = parseInt(prompt("Insira o primeiro valor: "))
let b = parseInt(prompt("Insira o segundo valor: "))
let c = parseInt(prompt("Insira o terceiro valor: "))
console.log(`\nValores inseridos: ${a}, ${b}, ${c}`)
if (a > b) {
    let temp = a
    a = b
    b = temp
}
if (a > c) {
    let temp = a
    a = c
    c = temp
}
if (b > c) {
    let temp = b
    b = c
    c = temp
}
console.log(`Valores em ordem crescente: ${a}, ${b}, ${c}`)