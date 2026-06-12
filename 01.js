const prompt = require('prompt-sync')()
console.log(`SEJA BEM VINDO!`);
console.log("---------------");
console.log("    conversor  ");
console.log("---------------");
const temperatura = parseInt(prompt("me informe a temperatura desejada:"))
const total = (temperatura * 9 / 5 +32)
console.log(`sua temperatura é de ${total} F° `)