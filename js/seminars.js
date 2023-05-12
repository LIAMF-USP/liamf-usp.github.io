// Months.
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

function displaySeminar(S, i) {
  return `<a href="snail_posters/${S[i][0]}">
      <div class="seminarbox">
        <div class="snailbox">
          <h2>${S[i][1]}</h2>
          <h3>${S[i][2]}</h3>
        </div>
        <div class="datebox">
          <h2>${String(S[i][5]).padStart(2, '0')}</h2>
          <h2>${months[S[i][4]-1]}</h2>
        </div>
      </div>
    </a>\n\n`;
}

function aggregateSeminars(S) {
  var s = `<h2>${S[0][3]}</h2>\n<br>`;
  var lastYear = S[S.length-1][3];
  var addBreak = false;
  for (let i = S.length-1; i >= 0; --i) {
    if (lastYear != S[i][3]) {
      s += `<h2>${S[i][3]}</h2>\n<br>`
      lastYear = S[i][3];
      addBreak = true;
    }
    s += displaySeminar(S, i);
    if (addBreak) {
      s += "<br><br>\n\n";
      addBreak = false;
    }
  }
  return s;
}

// Converts a triple (year, month, day) to a single integer.
function date2num(x) { return x[3]*10000 + x[4]*100 + x[5]; }
// Gets the diff of a Date D and an array X whose elements in index 3, 4 and 5 are YearMonthDay.
function diffDate(D, X) {
  return (D.getFullYear()*10000 + (D.getMonth()+1)*100 + D.getDate()) - date2num(X);
}

function nextSeminar(S) {
  // This ignores timezones. Hopefully this won't bite us in the ass in the future. :)
  var today = new Date();
  var next = null;
  var b = -Infinity;
  for (let i = S.length-1; i >= 0; --i) {
    let d = diffDate(today, S[i]);
    // Invariant: S is sorted; if d > 0, the following seminars are all in the past.
    if (d > 0) break;
    else if (d > b) {
      next = i;
      b = d;
    }
  }
  if (next == null) return "";
  return `<h2>Próximo Seminário</h2>\n<br>` + displaySeminar(S, next) + "<br><br>\n\n";
}

// Seminars are organized over three dimensions:
//   The second refers to each seminar;
//   The third refers to the info on each seminar.
// The elements in the third dimension are, in order, poster filename, seminar title, speaker name,
// year, month and day the seminar took place.
const S = [
  ["seminario_papagaios_demonios.pdf",
   "Demônios Semânticos e Papagaios Estocásticos: uma Introdução à Inferência em Linguagem Natural",
   "Felipe R. Serras", 2023, 5, 19],
  ["seminario_nmr_dl_typicality.pdf",
   "Non-monotonic Reasoning in Description Logics Through Tipicality Models",
   "Igor de Camargo e Souza Câmara", 2023, 6, 2],
  ["seminario_escalonamento.pdf", "Escalonando Disciplinas por Programação Lógica",
   "Grupo da disciplina Laboratório de Métodos Ágeis", 2023, 3, 31],
  ["seminario_ciencia_dados.pdf", "Como é a Carreira em Ciência de Dados", "Vivian Magri",
   2023, 4, 14],
  ["seminario_graph_kernels.pdf", "Machine Learning for Graphs and Some Applications to Polymer Science",
   "David Kohan Marzagão", 2023, 4, 18],
  ["seminario_chat_gpt.pdf", "Desvendando o ChatGPT", "Bruna Bazaluk", 2023, 5, 5],
].sort((x, y) => (date2num(x) - date2num(y)));

document.getElementById("listofseminars").innerHTML += nextSeminar(S) + aggregateSeminars(S);
