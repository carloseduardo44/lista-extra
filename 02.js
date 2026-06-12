console.log(`Seja const prompt = require('prompt-sync')()
Bem Vindo!`);
console.log(`---------------`);
console.log(`Conversor 2.0`);
console.log(`----------------`);
const temp = parseInt(prompt(`Insira a temperatura desejada: `));
const total = (temp - 32 * 5/9);
console.log("Resultado!");
console.log(`O seu resultado foi de ${total} C°`)
