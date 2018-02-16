var cont = 0;

function eventClick(div) {
  cont++;
  alert(div.id);
  for (var i = cont; i <= 9; i++) {
    if (cont % 2 == 0) {
      div.style.backgroundImage =
        "url('https://78.media.tumblr.com/37b05aae4ac14a79f35cb23df1703703/tumblr_oazc5z08MX1tszwcio1_500.gif')";
    } else {
      div.style.backgroundImage =
        "url('https://media1.tenor.com/images/3bc22abcece7e4ed67596760e98c5a4e/tenor.gif')";
    }
  }
  var quadro1 = document.getElementById("quadro1").style.backgroundImage;
  var quadro2 = document.getElementById("quadro2").style.backgroundImage;
  var quadro3 = document.getElementById("quadro3").style.backgroundImage;
  var quadro4 = document.getElementById("quadro4").style.backgroundImage;
  var quadro5 = document.getElementById("quadro5").style.backgroundImage;
  var quadro6 = document.getElementById("quadro6").style.backgroundImage;
  var quadro7 = document.getElementById("quadro7").style.backgroundImage;
  var quadro8 = document.getElementById("quadro8").style.backgroundImage;
  var quadro9 = document.getElementById("quadro9").style.backgroundImage;
  var result = new Array[(3, 3)]();
  var quadros = new Array(
    quadro1,
    quadro2,
    quadro3,
    quadro4,
    quadro5,
    quadro6,
    quadro7,
    quadro8,
    quadro9
  );

  for (var i = 0; i < array(length); i++) {
    for (var j = 0; i < array(length); j++) {
      if (array[(i, j)].style.backgroundImage) {
      }
    }
  }

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
}
