const prompt = require('prompt-sync')()
let nu1 = Number(prompt("Digite o primeiro número: "));
let nu2 = Number(prompt("Digite o segundo número: "));
let nu3 = Number(prompt("Digite o terceiro número: "));
let nu4 = Number(prompt("Digite o quarto número: "));
let nu5 = Number(prompt("Digite o quinto número: "));
let maior = nu1;
let menor = nu1;
if (nu2 > maior) maior = nu2;
if (nu3 > maior) maior = nu3;
if (nu4 > maior) maior = nu4;
if (nu5 > maior) maior = nu5;
if (nu2 < menor) menor = nu2;
if (nu3 < menor) menor = nu3;
if (nu4 < menor) menor = nu4;
if (nu5 < menor) menor = nu5;
console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);
