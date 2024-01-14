function salvaDados() {
  let nome = document.getElementById("nome").value;
  let matricula = document.getElementById("matricula").value;

  if (nome && matricula) {
    chrome.storage.sync.set(
      { nomeAgente: nome, matriculaAgente: matricula },
      function () {
        console.log("Settings saved");
        document.getElementById("ok").textContent = " OK";
        setTimeout(
          () => (document.getElementById("ok").textContent = " "),
          1000
        );
      }
    );
  }
}

document.getElementById("salvar").addEventListener("click", salvaDados);

chrome.storage.sync.get(["nomeAgente", "matriculaAgente"], function (items) {
  console.log(items);
  
  items?.nomeAgente && (document.getElementById("nome").value = items.nomeAgente);
  items?.matriculaAgente && (document.getElementById("matricula").value = items.matriculaAgente);
});
