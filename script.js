document.getElementById('enterBtn').addEventListener('click', () => {
  const music = document.getElementById('bgMusic');
  music.play();

  // Redirecionar ou revelar a próxima parte da jornada
  window.location.href = "pagina1.html"; // vamos criar essa próxima
});
