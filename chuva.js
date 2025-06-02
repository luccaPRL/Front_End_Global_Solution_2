document.getElementById('gerarChuva').addEventListener('click', function () {
  const opcoes = ["0%", "30%", "45%", "55%", "65%", "78%", "85%", "92%", "100%"];
  const chuva = opcoes[Math.floor(Math.random() * opcoes.length)];
  const percentual = parseInt(chuva.replace('%', ''));

  let risco = "";
  if (percentual >= 80) {
    risco = "🔴 RISCO ALTO";
  } else if (percentual >= 50) {
    risco = "🟠 RISCO MÉDIO";
  } else {
    risco = "🟢 RISCO BAIXO";
  }

  document.getElementById('resultado').innerText = `Previsão: ${chuva}\n${risco}`;

  localStorage.setItem("ultimaPrevisao", chuva);
  localStorage.setItem("ultimoRisco", risco);
});
