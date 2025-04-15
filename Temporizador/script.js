let timer;
let totalTime = 0;

const alarmSound = new Audio("teste2.mp3"); // Som do alarme final
const elevadorMusic = new Audio("elevador.mp3"); // Música de fundo
elevadorMusic.loop = true; // Toca sem parar enquanto o tempo roda

function startTimer() {
  clearInterval(timer);
  const minutes = parseInt(document.getElementById("minutes").value);
  totalTime = minutes * 60;

  updateDisplay();

  elevadorMusic.currentTime = 0; // Começa do início
  elevadorMusic.volume = 0.3; // Volume baixinho e charmoso
  elevadorMusic.play(); // Toca a música de elevador

  timer = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timer);
      elevadorMusic.pause(); // Para a musiquinha
      alarmSound.play(); // Toca o som final
      alert("⏰ Tempo esgotado!");
    } else {
      totalTime--;
      updateDisplay();
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  document.getElementById("time").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("time").textContent = "00:00";
  document.getElementById("minutes").value = "";
  elevadorMusic.pause(); // Garante que a música também pare
  elevadorMusic.currentTime = 0;
}

// Esse temporizador funciona pegando o valor digitado em minutos, convertendo pra segundos e fazendo uma contagem regressiva usando JavaScript. A cada segundo, ele atualiza o tempo na tela e quando chega a zero, exibe um alerta. O design usa uma paleta rosa e menta pra manter o estilo do meu projeto.