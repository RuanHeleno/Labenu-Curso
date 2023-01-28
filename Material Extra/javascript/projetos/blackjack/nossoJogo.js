/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

const result = confirm("Quer iniciar uma nova rodada?");
if (result) {
  const userCartas = [];
  userCartas.push(comprarCarta());
  userCartas.push(comprarCarta());

  let userCartasValor = 0;
  for (let value of userCartas) {
    userCartasValor += value.valor;
  }

  const computadorCartas = [];
  computadorCartas.push(comprarCarta());
  computadorCartas.push(comprarCarta());

  let computadorCartasValor = 0;
  for (let value of computadorCartas) {
    computadorCartasValor += value.valor;
  }

  console.log(
    `Usuário - cartas: ${userCartas.map(
      (e) => e.texto
    )} - pontuação: ${userCartasValor}`
  );
  console.log(
    `Computador - cartas: ${computadorCartas.map(
      (e) => e.texto
    )} - pontuação: ${computadorCartasValor}`
  );

  let limite = 21;

  if (limite - userCartasValor < limite - computadorCartasValor) {
    if (userCartasValor < limite || userCartasValor === limite)
      console.log(`O vencedor foi o Jogador!`);
    else console.log(`O vencedor foi o Computador!`);
  } else if (limite - userCartasValor > limite - computadorCartasValor) {
    if (computadorCartasValor < limite || computadorCartasValor === limite)
      console.log(`O vencedor foi o Computador!`);
    else console.log(`O vencedor foi o Jogador!`);
  }
  else console.log(`Empate!`);
} else console.log("O jogo acabou");
