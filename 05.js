const prompt = require('prompt-sync')()
console.log(`Bem vindo!`);
console.log(`----------`);
const nome = prompt(`Insira seu nome: `);
const v1 = parseFloat(prompt(`Insira o valor em $: `));
const v2 = (v1 * 5.10);
console.log(`Olá ${nome}, seu valor em R$ é de R$${v2} `);