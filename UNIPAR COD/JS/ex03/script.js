let inputpreco = document.querySelector("#inputpreco");
let inputvalorPago = document.querySelector("#inputvalorPago");
let calcularTroco = document.querySelector("#calcularTroco");
let troco = document.querySelector("#troco");

function calcular(){
    let trocovalor = Number(inputvalorPago.value) - Number(inputpreco.value);
    troco.innerHTML = "Troco a ser dado: R$" + trocovalor.toFixed(2);
}
calcularTroco.onclick = function(){
    calcular();
}