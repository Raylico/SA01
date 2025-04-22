const pianoKeys = document.querySelectorAll(".piano-keys .key"), // Seleciona todas as teclas do piano
      volumeSlider = document.querySelector(".volume-slider input"), // Seleciona o controle deslizante de volume
      keysCheckbox = document.querySelector(".keys-checkbox input"); // Seleciona a caixa de seleção para mostrar/esconder as teclas

let allKeys = [];

const playTune = (key) => {
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // Seleciona a tecla correspondente à tecla pressionada
    if (!clickedKey) return; // Se a tecla não existir, não faz nada
    
    const audio = new Audio(`tunes/${key}.wav`);
    audio.volume = volumeSlider.value; // Define o volume do áudio com base no controle deslizante
    audio.play();

    clickedKey.classList.add("active"); // Adiciona a classe "active" à tecla pressionada para animação
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150); // Remove a classe "active" após 150ms para reverter a animação
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key)); // Adiciona um evento de clique a cada tecla para tocar o som correspondente
});

const handleVolume = (e) => { 
    // Atualiza o volume no momento da reprodução
};

const showHideKeys = () => {  
    // Adiciona ou remove a classe "hide" para mostrar ou esconder as teclas
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
    // Verifica se a tecla pressionada está na lista de teclas do piano e toca o som correspondente
    if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys); // Adiciona um evento de clique à caixa de seleção para mostrar/esconder as teclas
volumeSlider.addEventListener("input", handleVolume); // Adiciona um evento de entrada ao controle deslizante de volume para atualizar o volume
document.addEventListener("keydown", pressedKey); // Adiciona um evento de pressionamento de tecla para tocar o som correspondente à tecla pressionada
