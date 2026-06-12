const prompt = require('prompt-sync')()
console.log("PASSA OU REPROVA ");
console.log("--------------------------------------------");
const nome = prompt(`Insira seu nome: `);
const n1 = parseInt(prompt(`Insira a primeira nota: `));
const n2 = parseInt(prompt(`Insira a segunda nota: `));
const n3 = parseInt(prompt(`Insira a terceira nota: `));
const n4 = parseInt(prompt(`Insira a quarta nota: `));
const res = (n1 + n2 + n3 + n4)/4
if(res >= 7){console.log(`Olá aluno ${nome}, você passou!`)}else{
console.log(`Olá aluno ${nome}, você reprovou!  `)}
console.log(`---------------------------------------------`);