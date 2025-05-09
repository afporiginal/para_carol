function checkRiddle() {
  const input = document.getElementById("riddleAnswer").value.trim();
  const correct = "645428"; // Nova resposta lógica: 6 (dia) + 4 (mês) + 5 (último dígito do ano) + 4 (amor) + 5 (carol) + 28 (soma de dia + mês)

  if (input === correct) {
    document.getElementById("passwordSection").classList.remove("hidden");
  } else {
    alert("Hmm... tente novamente. Cada número tem um segredo profundo, assim como nossa jornada.");
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
