const bolinha = 'url("_imagens/b.png")',
  xis = 'url("_imagens/x.jpg")';

let lastClick = bolinha,
  tabuleiro = [],
  jogador1,
  jogador2;

const pegarJogadores = () => {
  jogador1 = prompt("Jogador 1 digite seu nome: ") || "Player1";
  jogador2 = prompt("Jogador 2 digite seu nome: ") || "Player2";
}

pegarJogadores();

const eventClick = (div) => {
  let winner = document.getElementById("NomeVencedor");
  if (div.style.backgroundImage != "" || winner.innerHTML != "") return;
  div.style.backgroundImage = lastClick == bolinha ? xis : bolinha;
  lastClick = div.style.backgroundImage;
  tabuleiro = [];
  let lista = [...document.querySelectorAll(".quadro")].map(div => (
    div.style.backgroundImage
  ));
  while (lista.length) tabuleiro.push(lista.splice(0, 3));
  winner.innerHTML = ganhou();
}

const ganhou = () => {
  for (let i = 0; i <= 2; ++i) { //linhas
    if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== "") {
      return tabuleiro[i][0] === xis ? jogador1 : jogador2;
    }
  }
  for (let j = 0; j <= 2; ++j) { //colunas
    if (tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j] && tabuleiro[0][j] !== "") {
      return tabuleiro[0][j] === xis ? jogador1 : jogador2;
    }
  }
  if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== "") {
    return tabuleiro[0][0] === xis ? jogador1 : jogador2;
  }
  if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== "") {
    return tabuleiro[0][2] === xis ? jogador1 : jogador2;
  }
  let preenchidos = 0;
  for (let i = 0; i <= 2; ++i) {
    for (let j = 0; j <= 2; ++j) {
      if (tabuleiro[i][j] !== "") {
        ++preenchidos;
      }
    }
  }
  if (preenchidos === 9) {
    return "Deu Velha";
  }
  return '';
};

const resetaGame = () => {
  document.querySelectorAll(".quadro").forEach(div => {
    div.style.backgroundImage = "";
  });
  document.getElementById("NomeVencedor").innerHTML = "";
  lastClick = bolinha;
  pegarJogadores();
};
