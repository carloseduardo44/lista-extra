const prompt = require('prompt-sync')()
console.log(`Bem vindo!`);
console.log(`----------`);
const n1 = parseInt(prompt(`Ìnsira o numero: `));
if(n1 >0 ){console.log(`O número ${n1} é positivo! `)
} else {
    console.log("O número é negativo!");
}
console.log(`------------`);