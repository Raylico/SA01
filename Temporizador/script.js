let timer; // Variável global para o temporizador
let totalTime = 0; // Tempo total em segundos
const alarmSound = new Audio("teste2.mp3"); // Som do alarme final
const elevadorMusic = new Audio("elevador.mp3"); // Música de fundo
elevadorMusic.loop = true; // Toca sem parar enquanto o tempo roda

function startTimer() {
  clearInterval(timer);

  let minutes = parseInt(document.getElementById("minutes").value) || 0;
  let seconds = parseInt(document.getElementById("seconds").value) || 0;

  // Converte segundos extras para minutos
  if (seconds >= 60) {
    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;
  }

  totalTime = minutes * 60 + seconds;

  updateDisplay();

  if (elevadorMusic) {
    elevadorMusic.currentTime = 0; // Começa do início
    elevadorMusic.volume = 0.3; // Volume baixinho e charmoso
    elevadorMusic.play(); // Toca a música de elevador
  }

  timer = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timer);
      if (elevadorMusic) elevadorMusic.pause(); // Para a musiquinha
      if (alarmSound) alarmSound.play(); // Toca o som final
      alert("⏰ Tempo esgotado!");
    } else {
      totalTime--;
      updateDisplay();
    }
  }, 1000);
}

function updateDisplay() {
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;

  document.getElementById("time").textContent = 
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Esse temporizador funciona pegando o valor digitado em minutos, convertendo pra segundos e fazendo uma contagem regressiva usando JavaScript. A cada segundo, ele atualiza o tempo na tela e quando chega a zero, exibe um alerta. O design usa uma paleta rosa e menta pra manter o estilo do meu projeto.

// Esse temporizador funciona pegando o valor digitado em minutos, convertendo pra segundos e fazendo uma contagem regressiva usando JavaScript. A cada segundo, ele atualiza o tempo na tela e quando chega a zero, exibe um alerta. O design usa uma paleta rosa e menta pra manter o estilo do meu projeto.
// Esse temporizador funciona pegando o valor digitado em minutos, convertendo pra segundos e fazendo uma contagem regressiva usando JavaScript. A cada segundo, ele atualiza o tempo na tela e quando chega a zero, exibe um alerta. O design usa uma paleta rosa e menta pra manter o estilo do meu projeto.