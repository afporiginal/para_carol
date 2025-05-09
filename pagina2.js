function checkRiddle() {
  const input = document.getElementById("riddleAnswer").value.trim();
  const correct = "2409"; // 24 = dia | 04+2025 = 2029 → 2+0+2+9 = 13 → 2409 como quebra lógica (mistério)

  if (input === correct) {
    document.getElementById("passwordSection").classList.remove("hidden");
  } else {
    alert("Hmm... tente novamente. Pense no que essa data significa para nós.");
  }
}

function checkPassword() {
  const password = document.getElementById("passwordInput").value.trim();

  if (password === "24/04/2025") {
    document.getElementById("successMessage").classList.remove("hidden");
  } else {
    alert("Senha incorreta... tente com carinho 🧠❤️");
  }
}
