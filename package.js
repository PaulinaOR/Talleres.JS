const edad = document.getElementById("Edad");
const message = document.getElementById("answer");

function main(){

const age =  parseInt(edad.value);

if (!age){
  error();
	}else {
  evaluate(age);
  }
}

function error(){

 message.innerHTML = "Ingrese datos validos";
    message.classList.add("text-danger");
}

function evaluate(edad){

if (edad < 18){
menor(edad);
}
else{ 
mayor(edad);
	}
}

function mayor(edad){
message.classList.remove("text-danger");
message.innerHTML = ` ${edad} años es mayor de edad`;
message.classList.add("text-success");
}

function menor(edad){
message.classList.remove("text-danger");
message.innerHTML = ` ${edad} años es menor de edad`;
message.classList.add("text-info");

}