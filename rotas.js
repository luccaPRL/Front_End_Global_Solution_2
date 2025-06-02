document.getElementById("mostrarRotas").addEventListener("click", function () {
  const rotas = {
    "AV. Paulista": "Siga pela Rua Augusta até o abrigo municipal.",
    "Itaim Bibi": "Siga pela Avenida Faria Lima até o centro comunitário.",
    "Vila Madalena": "Siga pela Rua Harmonia até a escola pública.",
    "Pinheiros": "Siga pela Avenida Rebouças até o hospital local.",
    "Liberdade": "Siga pela Rua Galvão Bueno até o templo comunitário.",
    "Bela Vista": "Siga pela Avenida Brigadeiro Luís Antônio até o ponto de apoio."
  };

  const locaisRisco = JSON.parse(localStorage.getItem("locaisRisco"));
  const lista = document.getElementById("listaRotas");
  lista.innerHTML = "";

  if (locaisRisco && locaisRisco.length > 0) {
    locaisRisco.forEach(function (local) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${local}:</strong> ${rotas[local]}`;
      lista.appendChild(li);
    });
  } else {
    const aviso = document.createElement("p");
    aviso.textContent = "Nenhum local de risco carregado. Acesse a página de locais primeiro.";
    lista.appendChild(aviso);
  }
});
