console.clear();
var prompt = require("prompt-sync")();

// Construção de um array
const escolha = ["Sair", "Pedra", "Papel", "Tesoura"];

//Variaveis globais
var resultados = [];
var jogadas = [];
var v1 = 0;
var v2 = 0;
var empate = 0;

//Chamando a função menu
menu();

//Variaveis
var plays = 0;
var quantidadeJogadas = +prompt("Digite a quantidade jogadas: ");

//laço de repetição que engloba todo o programa
while (plays < quantidadeJogadas) {
  console.log();

  //Pergunta para seguinte validação
  var usuario = +prompt("Digite uma das opções citadas acima no menu: ");

  //Validando dados de entrada na variavel usuário
  while (usuario !== 0 && usuario !== 1 && usuario !== 2 && usuario !== 3) {
    console.log("Opção inválida...");
    var usuario = +prompt("Digite uma das opções citadas acima no menu: ");
  }
  console.log();

  //Condicionais usuário
  if (usuario === 0) {
    console.log();
    console.log(`Você selecionou: ${escolha[0]}`);
    console.log("Encerrando o programa...");
    break;
  } else if (usuario === 1) {
    var resUsuario = `Você selecionou: ${escolha[1]}`;
  } else if (usuario === 2) {
    var resUsuario = `Você selecionou: ${escolha[2]}`;
  } else if (usuario === 3) {
    var resUsuario = `Você selecionou: ${escolha[3]}`;
  }

  // Variavel que fará através de uma função números aleatórios
  var pc = gerarNumAleatorio(1, 3);

  //Condicionais PC
  if (pc === 1) {
    var resPc = `O computador escolheu: ${escolha[1]}`;
  } else if (pc === 2) {
    var resPc = `O computador escolheu: ${escolha[2]}`;
  } else if (pc === 3) {
    var resPc = `O computador escolheu: ${escolha[3]}`;
  }

  //Exebição do que cada um escolheu
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(resUsuario);
  console.log(resPc);
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

  //Preenchendo os dados no array
  jogadas.push([usuario, pc]);

  //Incremento do laço de repetição
  plays++;

  //Chamando a função vencedor
  vencendor();

  //Condição para um novo jogo atrelado a jogadas
  if (plays === quantidadeJogadas) {
    var plays = 0;
    var quantidadeJogadas;
    console.log();
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log(`Usuario: ${v1} | Pc: ${v2} | Empates: ${empate}`);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log();

    if (v1 > v2) {
      console.log(`O vencedor é você com ${v1} vitória(s)`);
      console.log();

      // Sequência do código de Jogar Novamente
      console.log(`Deseja jogar novamente?`);
      var endPlay = prompt(`Digite [S/N]: `);
      var resPlay = endPlay.toUpperCase();
      if (resPlay === "S") {
        menu();
        quantidadeJogadas = +prompt("Digite a quantidade jogadas: ");
      } else {
        console.log();
        console.log(`Você selecionou: ${escolha[0]}`);
        console.log("Encerrando o programa...");
        break
      }
    } 
    else if (v2 > v1) {
      console.log(`O Vencedor é o computador com ${v2} vitória(s)`);
      console.log();

      // Sequência do código de Jogar Novamente
      console.log(`Deseja jogar novamente?`);
      var endPlay = prompt(`Digite [S/N]: `);
      var resPlay = endPlay.toUpperCase();
      if (resPlay === "S") {
        menu();
        quantidadeJogadas = +prompt("Digite a quantidade jogadas: ");
      } else {
        console.log();
        console.log(`Você selecionou: ${escolha[0]}`);
        console.log("Encerrando o programa...");
        break
      }
    } 
    else if (v1 == v2) {
      console.log(`Nossa deu empate!`);
      console.log(`Recomendo jogar uma nova rodada para sair do empate`);
      console.log();

      // Sequência do código de Jogar Novamente
      console.log(`Deseja jogar novamente?`);
      var endPlay = prompt(`Digite [S/N]: `);
      var resPlay = endPlay.toUpperCase();
      if (resPlay === "S") {
        menu();
        quantidadeJogadas = +prompt("Digite a quantidade jogadas: ");
      } else {
        console.log();
        console.log(`Você selecionou: ${escolha[0]}`);
        console.log("Encerrando o programa...");
        break
      }
    }
  }
}

//Verifica o vencedor
function vencendor() {
  if (pc === 1) {
    if (usuario === 1) {
      console.log(`Resultado: Empate`);
      empate += 1;
    } else if (usuario === 2) {
      console.log(`Resultado: Você venceu.`);
      v1 += 1;
    } else if (usuario === 3) {
      console.log(`Resultado: Computador venceu.`);
      v2 += 1;
    }
  } else if (pc === 2) {
    if (usuario === 1) {
      console.log(`Resultado: Computador venceu.`);
      v2 += 1;
    } else if (usuario === 2) {
      console.log(`Resultado: Empate`);
      empate += 1;
    } else if (usuario === 3) {
      console.log(`Resultado: Você venceu.`);
      v1 += 1;
    }
  } else if (pc === 3) {
    if (usuario === 1) {
      console.log(`Resultado: Você venceu.`);
      v1 += 1;
    } else if (usuario === 2) {
      console.log(`Resultado: Computador venceu.`);
      v2 += 1;
    } else if (usuario === 3) {
      console.log(`Resultado: Empate`);
      empate += 1;
    }
  }
  /* console.log(`Usuario: ${v1} | Pc: ${v2} | Empates: ${empate}` ) */
  return v1, v2, empate;
}

//Gerando número aleatórios
function gerarNumAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função menu para não poluir tanto o código
function menu() {
  console.log();
  console.log("-- JOKENPO --");
  console.log("----------");
  console.log(`0- ${escolha[0]}`);
  console.log(`1- ${escolha[1]}`);
  console.log(`2- ${escolha[2]}`);
  console.log(`3- ${escolha[3]}`);
  console.log("----------");
  console.log();
}
