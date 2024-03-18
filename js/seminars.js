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
  var lastYear = S[S.length-1][3];
  var s = `<h2>${lastYear}</h2>\n<br>`;
  var foundLast = false;
  var addBreak = false;
  for (let i = S.length-1; i >= 0; --i) {
    if (lastYear != S[i][3] && !foundLast) {
      s += `<br><h2><button type="button" class="collapsible" title="${S[i][3]}">+ ${S[i][3]} +</button></h2>\n<br>`;
      s += `<div id="cnt-bt-${S[i][3]}" class="content">`
      lastYear = S[i][3];
      addBreak = true;
      foundLast = true;
    }
    s += displaySeminar(S, i);
  }
  s += "</div><br>";

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
  ["seminario_renata.pdf",
   "Como mudar suas crenças?",
   "Renata Wassermann", 2024, 3, 22],
  ["seminario_profs.pdf",
   "Conhecendo o LIAMF: Laboratório de Lógica, Inteligência Artificial e Métodos Formais do IME",
   "Professores do LIAMF", 2024, 3, 8],
  ["seminario_filosofia_mente.pdf",
   "Filosofia da Mente e o Limite Qualitativo de Modelos Quantitativos",
   "Osvaldo Pessoa Jr.", 2023, 12, 1],
  ["seminario_nash_logic.pdf",
   "Nash encontra Łukasiewicz: Computando Equilíbrios via Lógica",
   "Sandro Preto", 2023, 12, 15],
  ["seminario_prob_circuits.pdf",
   "Thinking with Circuits: From Logic to Probabilistic and Back",
   "Renato Lui Geh", 2023, 8, 25],
  ["seminario_dpasp.pdf",
   "dPASP: Programming with Logic and Neural Networks",
   "Renato Lui Geh", 2023, 9, 1],
  ["seminario_neurosymbolic_nlp.pdf",
   "Neuro-symbolic: Approaches and Applications in NLP",
   "Fabiano Luz", 2023, 12, 8],
  ["seminario_ontology_privacy.pdf",
   "Ontology-Based Privacy Management in Health Tracking Systems Using Differential Privacy",
    "Erika Guetti Suca", 2023, 6, 16],
  ["seminario_papagaios_demonios.pdf",
   "Demônios Semânticos e Papagaios Estocásticos: uma Introdução à Inferência em Linguagem Natural",
   "Felipe R. Serras", 2023, 5, 19],
  ["seminario_nmr_dl_tipicality.pdf",
   "Non-monotonic Reasoning in Description Logics Through Tipicality Models",
   "Igor de Camargo e Souza Câmara", 2023, 6, 23],
  ["seminario_escalonamento.pdf", "Escalonando Disciplinas por Programação Lógica",
   "Grupo da disciplina Laboratório de Métodos Ágeis", 2023, 3, 31],
  ["seminario_ciencia_dados.pdf", "Como é a Carreira em Ciência de Dados", "Vivian Magri",
   2023, 4, 14],
  ["seminario_graph_kernels.pdf", "Machine Learning for Graphs and Some Applications to Polymer Science",
   "David Kohan Marzagão", 2023, 4, 18],
  ["seminario_chat_gpt.pdf", "Desvendando o ChatGPT", "Bruna Bazaluk", 2023, 5, 5],
].sort((x, y) => (date2num(x) - date2num(y)));

document.getElementById("listofseminars").innerHTML += nextSeminar(S) + aggregateSeminars(S);

// Add collapsible listeners.
var C = document.getElementsByClassName("collapsible");
console.log(C);
for (let i = 0; i < C.length; i++) {
  C[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var cnt = document.getElementById("cnt-bt-" + this.title);
    if (cnt.style.display === "block") {
      cnt.style.display = "none";
      this.textContent = `+ ${this.title} +`;
    } else {
      cnt.style.display = "block";
      this.textContent = `- ${this.title} -`;
    }
  });
}
