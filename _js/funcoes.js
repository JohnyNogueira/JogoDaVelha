var cont = 0;
function eventClick(div) {
  cont++;
  for (var i = cont; i <= 9; i++) {
    if (cont % 2 == 0) {
      div.style.backgroundImage =
        "url('https://78.media.tumblr.com/37b05aae4ac14a79f35cb23df1703703/tumblr_oazc5z08MX1tszwcio1_500.gif')";
    } else {
      div.style.backgroundImage =
        "url('https://media1.tenor.com/images/3bc22abcece7e4ed67596760e98c5a4e/tenor.gif')";
    }
  }
  debugger;
  var matriz = [
    [
      document.getElementById("quadro1").style.backgroundImage,
      document.getElementById("quadro2").style.backgroundImage,
      document.getElementById("quadro3").style.backgroundImage
    ],
    [
      document.getElementById("quadro4").style.backgroundImage,
      document.getElementById("quadro5").style.backgroundImage,
      document.getElementById("quadro6").style.backgroundImage
    ],
    [
      document.getElementById("quadro7").style.backgroundImage,
      document.getElementById("quadro8").style.backgroundImage,
      document.getElementById("quadro9").style.backgroundImage
    ]
  ];
  debugger;
  if (matriz[0][0] == matriz[0][1] && matriz[0][0] == matriz[0][2]) {
    alert("teste");
  } else if (matriz[1][0] == matriz[1][1] && matriz[1][0] == matriz[1][2]) {
    alert("teste");
  }
}

//   } {
//     alert("teste");
//   }else if (matriz[2][0] == matriz[2][1] && matriz[2][0] == matriz[2][2]) {
//     alert("teste");
//   }else if (matriz[0][0] == matriz[1][0] && matriz[0][0] == matriz[2][0]) {
//     alert("teste");
//   }else if (matriz[0][1] == matriz[1][1] && matriz[0][1] == matriz[2][1]) {
//     alert("teste");
//   }else if (matriz[0][2] == matriz[1][2] && matriz[0][2] == matriz[2][2]) {
//     alert("teste");
//   }else if (matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2]) {
//     alert("teste");
//   }else if (matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0]) {
//     alert("teste");
//   }else
//     console.log("empatou!");
// }

//   if (
//     document.getElementById("quadro1").style.backgroundImage ==
//       document.getElementById("quadro2").style.backgroundImage &&
//     document.getElementById("quadro1").style.backgroundImage ==
//       document.getElementById("quadro3").style.backgroundImage
//   ) {
//     document.write("ganhou");
//   } else if (
//     document.getElementById("quadro4").style.backgroundImage ==
//       document.getElementById("quadro5").style.backgroundImage &&
//     document.getElementById("quadro4").style.backgroundImage ==
//       document.getElementById("quadro6").style.backgroundImage
//   ) {
//   }
