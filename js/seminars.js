function aggregateSeminars(S) {
  const year_start = 2023;
  var s = "";
  for (let i = S.length-1; i >= 0; --i) {
    s += `<h2>${year_start + i}</h2>\n<br>`
    for (let j = S[i].length-1; j >= 0; --j) {
      s += `<a href="snail_posters/${S[i][j][0]}">
        <div class="seminarbox">
          <div class="snailbox">
            <h2>${S[i][j][1]}</h2>
            <h3>${S[i][j][2]}</h3>
          </div>
          <div class="datebox">
            <h2>${S[i][j][3]}</h2>
            <h2>${S[i][j][4]}</h2>
          </div>
        </div>
      </a>\n\n`
    }
    s += "<br><br>\n\n";
  }
  return s;
}

// Seminars are organized over three dimensions:
//   The first refers to the year (starting from 2023);
//   The second refers to each seminar;
//   The third refers to the info on each seminar.
// The elements in the third dimension are, in order, poster filename, seminar title, speaker name,
// day, and month the seminar took place.
const S = [
  [["seminario_escalonamento.pdf", "Escalonando Disciplinas por Programação Lógica",
    "Grupo da disciplina Laboratório de Métodos Ágeis", "31", "Mar"],
   ["seminario_ciencia_dados.pdf", "Como é a Carreira em Ciência de Dados", "Vivian Magri",
    "14", "Abr"],
   ["seminario_graph_kernels.pdf", "Machine Learning for Graphs and Some Applications to Polymer Science",
    "David Kohan Marzagão", "18", "Abr"],
   ["seminario_chat_gpt.pdf", "Desvendando o ChatGPT", "Bruna Bazaluk", "05", "Mai"]],
]

document.getElementById("listofseminars").innerHTML += aggregateSeminars(S);
