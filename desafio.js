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

    function jogoDesafio21 () {
      
      let Desafio21 = confirm(`"Boas vindas ao jogo de BlackJack! Vulgo 21"
        Quer iniciar uma nova rodada?`)
    
      let jogador = []
      let computador = []
    
      if(Desafio21){
        let Start = false
    console.log (`Fim Jogo`)

        while(!Start){
          jogador.push(comprarCarta())
          jogador.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())
    
          if((jogador[0].valor === 11 && jogador[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11) ) {
            jogador = []
            computador = []
          } else {
            Start = true
          }
        } 
      }
        computador[0].texto = "Se";
        computador[0].valor = 0;
    
        let textoJogador = `Cartas do jogador : ${jogador[0].texto} ${jogador[1].texto}\n`
        let textoComputador = `Cartas do computador: ${computador[0].texto} ${computador[1].texto}\n`
    
        let pontosJogador = 0
        let pontosComputador = 0
    
        for (let i = 0; i < jogador.length; i++) {
          textoJogador += jogador[i].texto + " "
          pontosJogador += jogador[i].valor
        }
    
        for (let i = 0; i < computador.length; i++) {
          if (i === 0) {
            continue;
          }
          textoComputador += computador[i].texto + " "
          pontosComputador += computador[i].valor
        }
    
        let comprando = true
    
        while(comprando){
          if (pontosJogador > 21) {
            break;
          }
          let querComprar = confirm(
            `${textoJogador} \n A carta revelada do computador é ${computador[0].texto}${computador[1].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
          )
    
          if (querComprar){
            let carta = comprarCarta();
            jogador.push(carta)
            pontosJogador += carta.valor;
            textoJogador += ` ${carta.texto}`
          } else {
            comprando = false
          }
        }
    
        while (pontosComputador <= pontosJogador && pontosJogador <= 21) {
          let carta = comprarCarta();
          computador.push(carta)
          pontosComputador += carta.valor;
          textoComputador += ` ${carta.texto}`
        }
    
        let resultado = ""
    
        if (pontosJogador > 21) {
          resultado = "Computador Ganhou!"
        } else if (pontosComputador > 21) {
          resultado = "Jogador Ganhou!"
        } else if (pontosComputador > pontosJogador) {
          resultado = "Computador Ganhou!"
        } else if (pontosJogador > pontosComputador) {
          resultado = "Jogador Ganhou!"
        } else {
          resultado = "Empate!"
        }
      
        alert(`${textoJogador}\nPontuação do jogador: ${pontosJogador}\n${textoComputador}\nPontuação do computador: ${pontosComputador}\n${resultado}`)
         console.log (`${textoJogador}\nPontuação do jogador: ${pontosJogador}\n${textoComputador}\nPontuação do computador: ${pontosComputador}\n${resultado}`) 

      }
      jogoDesafio21()
      
      
