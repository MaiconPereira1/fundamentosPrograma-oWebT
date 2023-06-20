let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let somar = document.querySelector("#somar");
let resposta = document.querySelector("#resposta");

function calcularSoma(){
    let soma = Number(inputOne.value) + Number(inputTwo.value);
    resposta.textContent = "A soma é:" + soma;
}
somar.onclick = function(){
    calcularSoma();
}