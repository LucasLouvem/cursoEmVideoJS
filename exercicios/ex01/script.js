function img_hora_dia() {
  const hora_dia = new Date();
  const hora_agora = hora_dia.getHours();
  const comentario = window.document.getElementById("apresentar_hora");
  const imagem_da_hora = window.document.getElementById("imagem_dia");
  const fundo_tela = window.document.querySelector("body#corpo_fundo");
  if (hora_agora < 12) {
    comentario.innerHTML = `Agora são ${hora_agora} hrs, Bom Dia!`;
    fundo_tela.style.background = "rgb(173, 216, 230)";
    imagem_da_hora.src = "images/dia.png";
  } else if (hora_agora < 17) {
    comentario.innerText = `Agora são ${hora_agora} hrs, Boa Tarde!`;
    fundo_tela.style.background = "rgb(255, 165, 0)";
    imagem_da_hora.src = "images/tarde.png";
  } else {
    comentario.innerHTML = `Agora são ${hora_agora} hrs, Boa noite!`;
    fundo_tela.style.background = "rgb(10, 10, 20)";
    imagem_da_hora.src = "images/noite.png";
  }
}

window.onload = img_hora_dia();
