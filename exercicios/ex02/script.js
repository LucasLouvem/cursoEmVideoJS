function calcular_ano() {
  const n1 = window.document.getElementById("ano_nascimento").value;
  const data_formatada = Number(n1);
  const ano = new Date();
  const ano_atual = ano.getFullYear();
  idade = data_formatada - ano_atual;
}
