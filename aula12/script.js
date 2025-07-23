const agora = new Date();
const diaSem = agora.getDay();
console.log(diaSem);
switch (diaSem) {
  case 0:
    console.log("segunda");
    break;
  case 1:
    console.log("terça");
    break;
  case 2:
    console.log("quarta");
    break;
  case 3:
    console.log("quinta");
    break;
  default:
    console.log("nenhum dia da semana");
    break;
}
console.log("Fim do programa");
