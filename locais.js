document.getElementById("gerarLocais").addEventListener("click", function () {
  const todosLocais = [
    "AV. Paulista",
    "Itaim Bibi",
    "Vila Madalena",
    "Pinheiros",
    "Liberdade",
    "Bela Vista"
  ];

  const locaisRisco = [];
  while (locaisRisco.length < 3) {
    const sorteado = todosLocais[Math.floor(Math.random() * todosLocais.length)];
    if (!locaisRisco.includes(sorteado)) {
      locaisRisco.push(sorteado);
    }
  }

  localStorage.setItem("locaisRisco", JSON.stringify(locaisRisco));

  const lista = document.getElementById("listaLocais");
  lista.innerHTML = "";
  locaisRisco.forEach(function (local) {
    const li = document.createElement("li");
    li.textContent = local;
    lista.appendChild(li);
  });
});
