let args = process.argv.slice(2);
let [a,b, op] = args; 

a = Number(a);
b = Number(b);

function s(x, y){
    return x+y;
}
function m(x, y){
    return x*y;
}

if(op == 's') console.log(s(a,b))
else if(op == 'm') console.log(m(a,b));
else console.log('Opção inválida');