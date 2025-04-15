// Variáveis para armazenar a pontuação do jogador e do computador
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

// Função principal que implementa o jogo Pedra, Papel e Tesoura
const pedraPapelTesoura = (jogada) => {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

  if (jogada === escolhaComputador) {
    return { resultado: 'Empate!', escolhaComputador };
  }

  if (jogada === 'pedra') {
    if (escolhaComputador === 'papel') {
      return { resultado: 'Computador venceu!', escolhaComputador };
    } else {
      return { resultado: 'Você venceu!', escolhaComputador };
    }
  }

  if (jogada === 'papel') {
    if (escolhaComputador === 'tesoura') {
      return { resultado: 'Computador venceu!', escolhaComputador };
    } else {
      return { resultado: 'Você venceu!', escolhaComputador };
    }
  }

  if (jogada === 'tesoura') {
    if (escolhaComputador === 'pedra') {
      return { resultado: 'Computador venceu!', escolhaComputador };
    } else {
      return { resultado: 'Você venceu!', escolhaComputador };
    }
  }
};

// Função que é chamada ao jogador fazer uma escolha
const jogar = (escolha) => {
  if (pontuacaoJogador >= 3 || pontuacaoComputador >= 3) {
    document.getElementById('vencedor').innerHTML = 'O jogo já terminou! Clique em "↩️" para jogar novamente.';
    return;
  }

  const { resultado, escolhaComputador } = pedraPapelTesoura(escolha);

  // Atualiza a pontuação com base no resultado
  if (resultado === 'Você venceu!') {
    pontuacaoJogador++;
  } else if (resultado === 'Computador venceu!') {
    pontuacaoComputador++;
  }

  // Atualiza as imagens com base nas escolhas
  document.getElementById('imagemJogador').src = `img/${escolha}.png`;
  document.getElementById('imagemComputador').src = `img/${escolhaComputador}.png`;

  // Atualiza os elementos HTML com o resultado e a pontuação
  document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
  document.getElementById('pontuacao').innerHTML = `Pontuação - Você: ${pontuacaoJogador} | Computador: ${pontuacaoComputador}`;

  // Verifica se alguém alcançou 3 pontos e declara o vencedor
  if (pontuacaoJogador >= 3) {
    document.getElementById('vencedor').innerHTML = 'Parabéns! Você venceu o jogo!';
  } else if (pontuacaoComputador >= 3) {
    document.getElementById('vencedor').innerHTML = 'O computador venceu o jogo! Tente novamente.';
  }
};

// Função para resetar o jogo
const resetar = () => {
  pontuacaoJogador = 0;
  pontuacaoComputador = 0;
  document.getElementById('imagemJogador').src = '';
  document.getElementById('imagemComputador').src = '';
  document.getElementById('resultado').innerHTML = 'Resultado: ';
  document.getElementById('pontuacao').innerHTML = 'Pontuação - Você: 0 | Computador: 0';
  document.getElementById('vencedor').innerHTML = '';
};