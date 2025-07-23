const a = window.document.getElementById("testando");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", saiu);
function clicar() {
  a.innerText = "Clickou";
  a.style.background = "green";
}
function entrar() {
  a.innerText = "entrou";
  a.style.background = "blue";
}
function saiu() {
  a.innerText = "Saiu";
  a.style.background = "red";
}
