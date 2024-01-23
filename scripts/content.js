console.log("extensao-psp");

// async function esperaPorBotao() {
//   let botaoFornecerAnuencia = null;
//   while (botaoFornecerAnuencia === null) {
//     console.log("botaoFornecerAnuencia: " + botaoFornecerAnuencia);
//     botaoFornecerAnuencia = document.querySelector(
//       "input[value='Fornecer Anuência']"
//     );
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }

//   // `document.querySelector` may return null if the selector doesn't match anything.
//   if (botaoFornecerAnuencia) {
//     alert(botaoFornecerAnuencia);
//   }
// }

async function reinicia() {
  let inputNomePasseEntrada;
  let inputDataPasseSaidaPFRichCalendarInputDate;

  while (
    inputNomePasseEntrada !== null ||
    inputDataPasseSaidaPFRichCalendarInputDate !== null
  ) {
    inputNomePasseEntrada = document.querySelector(
      "#_documentoUnico\\:_nomePasseEntrada"
    );

    inputDataPasseSaidaPFRichCalendarInputDate = document.querySelector(
      "#_documentoUnico\\:_dataPasseSaidaPFRichCalendarInputDate"
    );

    // console.log("reinicia inputNomePasseEntrada: " + inputNomePasseEntrada);
    // console.log(
    //   "reinicia inputDataPasseSaidaPFRichCalendarInputDate: " +
    //     inputDataPasseSaidaPFRichCalendarInputDate
    // );

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  esperaFormAnuencia();
}

async function esperaFormAnuencia() {
  let inputNomePasseEntrada = null;
  let inputDataPasseSaidaPFRichCalendarInputDate = null;

  let nome;
  let matricula;

  let dados = await chrome.storage.sync.get(["nomeAgente", "matriculaAgente"]);

  nome = dados?.nomeAgente ? dados.nomeAgente : "";
  matricula = dados?.matriculaAgente ? dados.matriculaAgente : "";

  while (
    inputNomePasseEntrada === null &&
    inputDataPasseSaidaPFRichCalendarInputDate === null
  ) {
    inputNomePasseEntrada = document.querySelector(
      "#_documentoUnico\\:_nomePasseEntrada"
    );

    inputDataPasseSaidaPFRichCalendarInputDate = document.querySelector(
      "#_documentoUnico\\:_dataPasseSaidaPFRichCalendarInputDate"
    );

    //   console.log("esperaFormAnuencia inputNomePasseEntrada: " + inputNomePasseEntrada);
    //   console.log("esperaFormAnuencia inputDataPasseSaidaPFRichCalendarInputDate: " + inputDataPasseSaidaPFRichCalendarInputDate);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // `document.querySelector` may return null if the selector doesn't match anything.
  if (inputNomePasseEntrada) {
    let nomeAgencia = document.querySelector(
      "#_documentoUnico\\:_nomeAgenciaResponsavel"
    ).value;

    inputNomePasseEntrada.value = nomeAgencia && nomeAgencia;
    document.querySelector("#_documentoUnico\\:_nomeAgenteEntradaPF").value =
      nome;
    document.querySelector(
      "#_documentoUnico\\:_matriculaAgenteEntradaPF"
    ).value = matricula;
  }

  if (inputDataPasseSaidaPFRichCalendarInputDate) {
    inputDataPasseSaidaPFRichCalendarInputDate.value = new Date()
      .toLocaleString()
      .replace(",", "");
    document.querySelector("#_documentoUnico\\:_nomeAgenteSaidaPF").value =
      nome;
    document.querySelector("#_documentoUnico\\:_matriculaAgenteSaidaPF").value =
      matricula;
  }

  reinicia();
}

esperaFormAnuencia();

// #_documentoUnico\\:_nomePasseEntrada
// #_documentoUnico\\:_dataPasseEntradaInputDate
// #_documentoUnico\\:_nomeAgenteEntradaPF
// #_documentoUnico\\:_matriculaAgenteEntradaPF

// _documentoUnico:_nomeAgenciaResponsavel

// #_documentoUnico\\:_dataPasseSaidaPFRichCalendarInputDate
// #_documentoUnico\\:_nomeAgenteSaidaPF
// #_documentoUnico\\:_matriculaAgenteSaidaPF
