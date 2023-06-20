let titulo = document.querySelector("#titulo");
let campotexto = document.querySelector("#campotexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    let texto = String(campotexto.value);
    titulo.textContent = texto
}
btTrocarTexto.onclick = function(){
    alterarTexto();
}
