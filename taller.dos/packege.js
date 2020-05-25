const par = document.getElementById("number");
const resultado= document.getElementById("answer");

function show(){
const n = parseInt(par.value);
if(!n){
answer.innerHTML = `ingrese un dato valido`;
}else{
operation(n);
}
}

function operation(n){
if (n % 2 ){
incorrect(n)
}else{
correct(n);
}
}

function correct(n){
    answer.innerHTML = ` ${n} es un numero par`;
}
function incorrect(n){
    answer.innerHTML = `${n} no es un numero par`;
}