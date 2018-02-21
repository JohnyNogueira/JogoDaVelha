var cont = 0;
var i = 0;
const MilHouse =
  'url("https://78.media.tumblr.com/37b05aae4ac14a79f35cb23df1703703/tumblr_oazc5z08MX1tszwcio1_500.gif")';
const faustao =
  'url("https://media1.tenor.com/images/3bc22abcece7e4ed67596760e98c5a4e/tenor.gif")';
var ars = [];
var verificaGanhador = false;
function eventClick(div) {
  debugger;
  if (verificaGanhador) return false;
  if (div.style.backgroundImage == "") {
    i++;
    cont++;
    if (i % 2 == 0) div.style.backgroundImage = MilHouse;
    else div.style.backgroundImage = faustao;
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
  debugger;

  function ganhou(tetas) {
    if (
      tetas[0].style.backgroundImage == tetas[1].style.backgroundImage &&
      tetas[0].style.backgroundImage == tetas[2].style.backgroundImage &&
      tetas[0].style.backgroundImage != ""
    ) {
      document.getElementById("divGanhador").style.display = "Block";
      if (tetas[0].style.backgroundImage == faustao) {
        document.getElementById("NomeVencedor").innerHTML = "Faustão";
        i = 1;
      } else {
        document.getElementById("NomeVencedor").innerHTML = "MilHouse";
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
//   if (quadro1 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro4 != "" &&
//   quadro5 != "" &&
//   quadro6 != "" &&
//   quadro4 == quadro5 &&
//   quadro4 == quadro6
// ) {
//   if (quadro4 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro7 != "" &&
//   quadro8 != "" &&
//   quadro9 != "" &&
//   quadro7 == quadro8 &&
//   quadro8 == quadro9
// ) {
//   if (quadro7 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro1 != "" &&
//   quadro5 != "" &&
//   quadro9 != "" &&
//   quadro1 == quadro5 &&
//   quadro5 == quadro9
// ) {
//   if (quadro1 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro3 != "" &&
//   quadro5 != "" &&
//   quadro7 != "" &&
//   quadro3 == quadro5 &&
//   quadro5 == quadro7
// ) {
//   if (quadro3 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro1 != "" &&
//   quadro4 != "" &&
//   quadro7 != "" &&
//   quadro1 == quadro4 &&
//   quadro4 == quadro7
// ) {
//   if (quadro1 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro2 != "" &&
//   quadro5 != "" &&
//   quadro8 != "" &&
//   quadro2 == quadro5 &&
//   quadro5 == quadro8
// ) {
//   if (quadro2 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// } else if (
//   quadro3 != "" &&
//   quadro6 != "" &&
//   quadro9 != "" &&
//   quadro3 == quadro6 &&
//   quadro6 == quadro9
// ) {
//   if (quadro3 == faustao) {
//     alert("faustao ganhou");
//   } else alert("MilHouse ganhou");
//   verificaGanhador = true;
// }
// close if verificaGanhador
