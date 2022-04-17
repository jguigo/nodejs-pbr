// let soma = require("./4-modulos/soma"); //importa a função soma
// let multiplicacao = require("./4-modulos/multiplicacao"); //importa a função multiplicação

let calc = require("./4-modulos/calc"); //importa o objeto calc

let soma = require("./4-modulos/calc").soma; //importa a função soma
let multiplicacao = require("./4-modulos/calc").multiplicacao; //importa a função multiplicação

let args = process.argv.slice(2);
let [a,b, op] = args; 

a = Number(a);
b = Number(b);

if(op == 's') console.log(soma(a,b))
else if(op == 'm') console.log(multiplicacao(a,b));
else console.log('Opção inválida');

