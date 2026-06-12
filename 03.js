const prompt = require('prompt-sync')()

console.log("Seja Bem vindo:")
console.log("---------------")

const A = prompt("Insira o valor de A: ")
const B = prompt("Insira o valor de B: ")

console.log(`\nAntes da troca: A = ${A} | B = ${B}`)

let temp = A
let novoA = B
let novoB = temp

console.log(`Depois da troca: A = ${novoA} | B = ${novoB}`)