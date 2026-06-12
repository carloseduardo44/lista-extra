const prompt= require ('prompt-sync')()
let numeroInteiro = parseInt(prompt(`Digite um número:`));
if (numeroInteiro % 2 === 0) {
    console.log(`par`);
} else {
    console.log('ímpar');
}