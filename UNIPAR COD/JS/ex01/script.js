let inputnome = document.querySelector("#inputnome");
let inputsobrenome = document.querySelector("#inputsobrenome");
let exibirNome = document.querySelector("#exibirNome");
let nomecompleto = document.querySelector("#nomecompleto");

function mostrarNome(){
  let nome = String(inputnome.value);
  let sobrenome = String(inputsobrenome.value);
  /*textContent = somente texto
  nomecompleto.textContent = nome+ " " +sobrenome;*/

  //adicionar formatação css
  nomecompleto.style.color = "violet"
  
  //innerHTML = reconhece tags html
  nomecompleto.innerHTML += nome + " " + sobrenome + "<br>";

}
exibirNome.onclick = function(){
  mostrarNome();
}

/*function exibirNome() {
  let nome = document.querySelector('input[name="nome"]').value;
  let sobrenome = document.querySelector('input[name="sobrenome"]').value;
  let nomeCompleto = nome + " " + sobrenome;
  document.querySelector('h1.nome-completo').textContent = nomeCompleto;
*/