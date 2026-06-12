const prompt = require('prompt-sync')()
console.log(`SEJA BEm VINDO!`);
console.log(`---------------`);
const nome = prompt("Insira seu nome:" );
const n1 = parseInt(prompt(`Primeiro Numero: `));
const n2 = parseInt(prompt(`Segundo mumero: `));
const res = (n1 - n2);
console.log(`Olá ${nome}, O a diferença é de: ${res} `);
console.log(`------------------`);
