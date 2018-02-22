var cont = 0;
var i = 0;
const bolinha = 'url("_imagens/b.png")';
const xis = 'url("_imagens/x.jpg")';
var ars = [];
var verificaGanhador = false;
var jogador1 = prompt("Jogador 1 digite seu nome: ");
var jogador2 = prompt("Jogador 2 digite seu nome: ");
function eventClick(div) {
  if (verificaGanhador) return false;
  if (div.style.backgroundImage == "") {
    i++;
    cont++;
    if (i % 2 == 0) div.style.backgroundImage = bolinha;
    else div.style.backgroundImage = xis;
  }
  var ct = 0;
  var dvs = document.querySelectorAll(".quadro");
  for (let linha = 0; linha < 3; linha++) {
    ars[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++) {
      ars[linha][coluna] = dvs[ct];
      ct++;
    }
  }
  for (let index = 0; index <= 2; index++) {
    ganhou(ars[index]);
  }
  for (let index = 0; index <= 2; index++) {
    ganhou([ars[0][index], ars[1][index], ars[2][index]]);
  }
  ganhou([ars[0][0], ars[1][1], ars[2][2]]);
  ganhou([ars[0][2], ars[1][1], ars[2][0]]);

  function ganhou(array) {
    if (
      array[0].style.backgroundImage == array[1].style.backgroundImage &&
      array[0].style.backgroundImage == array[2].style.backgroundImage &&
      array[0].style.backgroundImage != ""
    ) {
      document.getElementById("divGanhador").style.display = "Block";
      if (array[0].style.backgroundImage == xis) {
        document.getElementById("NomeVencedor").innerHTML = jogador1;

        i = 1;
      } else {
        document.getElementById("NomeVencedor").innerHTML = jogador2;
        i = 0;
      }

      verificaGanhador = true;
    } else if (cont == 9 && verificaGanhador != true) {
      document.getElementById("divGanhador").style.display = "Block";
      document.getElementById("NomeVencedor").innerHTML = "Deu Velha";
      i = 0;
      verificaGanhador = true;
    }
  }
  document.getElementById("bt").onclick = function resetaGame() {
    var reload = document.querySelectorAll(".quadro");
    reload.forEach(function limpa(x) {
      x.style.backgroundImage = "";
    });
    document.getElementById("NomeVencedor").innerHTML = "";
    cont = 0;
    verificaGanhador = false;

    jogador1 = prompt("Jogador 1 digite seu nome: ");
    jogador2 = prompt("Jogador 2 digite seu nome: ");
  };
}
// var quadro1 = document.getElementById("quadro1").style.backgroundImage;
// var quadro2 = document.getElementById("quadro2").style.backgroundImage;
// var quadro3 = document.getElementById("quadro3").style.backgroundImage;
// var quadro4 = document.getElementById("quadro4").style.backgroundImage;
// var quadro5 = document.getElementById("quadro5").style.backgroundImage;
// var quadro6 = document.getElementById("quadro6").style.backgroundImage;
// var quadro7 = document.getElementById("quadro7").style.backgroundImage;
// var quadro8 = document.getElementById("quadro8").style.backgroundImage;
// var quadro9 = document.getElementById("quadro9").style.backgroundImage;
// if (
//   quadro1 != "" &&
//   quadro2 != "" &&
//   quadro3 != "" &&
//   quadro1 == quadro2 &&
//   quadro1 == quadro3
// ) {
//   if (quadro1 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro4 != "" &&
//   quadro5 != "" &&
//   quadro6 != "" &&
//   quadro4 == quadro5 &&
//   quadro4 == quadro6
// ) {
//   if (quadro4 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro7 != "" &&
//   quadro8 != "" &&
//   quadro9 != "" &&
//   quadro7 == quadro8 &&
//   quadro8 == quadro9
// ) {
//   if (quadro7 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro1 != "" &&
//   quadro5 != "" &&
//   quadro9 != "" &&
//   quadro1 == quadro5 &&
//   quadro5 == quadro9
// ) {
//   if (quadro1 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro3 != "" &&
//   quadro5 != "" &&
//   quadro7 != "" &&
//   quadro3 == quadro5 &&
//   quadro5 == quadro7
// ) {
//   if (quadro3 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro1 != "" &&
//   quadro4 != "" &&
//   quadro7 != "" &&
//   quadro1 == quadro4 &&
//   quadro4 == quadro7
// ) {
//   if (quadro1 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro2 != "" &&
//   quadro5 != "" &&
//   quadro8 != "" &&
//   quadro2 == quadro5 &&
//   quadro5 == quadro8
// ) {
//   if (quadro2 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro3 != "" &&
//   quadro6 != "" &&
//   quadro9 != "" &&
//   quadro3 == quadro6 &&
//   quadro6 == quadro9
// ) {
//   if (quadro3 == xis) {
//     alert("xis ganhou");
//   } else alert("bolinha ganhou");
//   verificaGanhador = true;
// }
// close if verificaGanhador
