function checkRiddle() {
  // Obtém o valor do input e remove espaços extras
  const input = document.getElementById("riddleAnswer").value.trim();

  // Resposta correta
  const correct = "645428"; 

  // Verifica se a resposta está correta
  if (input === correct) {
    document.getElementById("passwordSection").classList.remove("hidden");
    alert("Você acertou a resposta! Aqui está a surpresa!");
  } else {
    alert("Hmm... tente novamente. Lembre-se da nossa história.");
  }
}

function showSurprise() {
  alert("Aqui vai a surpresa: [Adicionar algo especial aqui]");
}
