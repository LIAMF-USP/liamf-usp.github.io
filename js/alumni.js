function aggregateAlumni(W) {
    var s_w = "<ul>\n";
    for (let i = 0; i < W.length; ++i) {
        if (`${W[i][1]}`==""){ 	
            s_w += `  <li><a>${W[i][0]}</a></li>\n`;
        }else{
            s_w += `  <li><a href="${W[i][1]}">${W[i][0]}</a></li>\n`;
        }
    }
    s_w += "</ul>\n";
    return s_w;
}

// Lista contendo todas as pessoas que aparecem em https://teses.usp.br. O primeiro campo de cada
// elemento da lista é o nome *completo* como aparece no Teses USP, e o segundo é o link para o
// site pessoal da pessoa.
const W = [["Adalberto Bosco Castro Pereira", ""],
           ["Adilson de Jesus Sanchez", ""],
           ["Adolfo Gustavo Serra Seca Neto", ""],
           ["Aldebaran Perseke", ""],
           ["Alexandre Locci Martins", ""],
           ["Alexandre Matos Arruda", ""],
           ["Alvaro Heiji Miyazawa", ""],
           ["Andreiwid Sheffer Corrêa", ""],
           ["André Casado Castaño", ""],
           ["Andréia Cristina Grisolio Machion", ""],
           ["Ary Fagundes Bressane Neto", ""],
           ["Barbara Tieko Agena", ""],
           ["Bruno Leme", ""],
           ["Bruno Vercelino da Hora", ""],
           ["Carlos Eduardo Atencio Torres", ""],
           ["Claudia de Oliveira Melo", ""],
           ["Cláudia Josimar Abrão de Araújo", ""],
           ["Crhistian Alberto Noriega Guerra", ""],
           ["Daniel Javier Casani Delgado", ""],
           ["Danilo Matheus Rubio Conde", ""],
           ["David Paulo Pereira", ""],
           ["David Robert Camargo de Campos", ""],
           ["Debora Lina Nascimento Ciriaco Pereira", "https://www.linkedin.com/in/debora-lina-ciriaco-592a0a55/"],
           ["Diego Mira David", ""],
           ["Dênis Antonio Lacerda", ""],
           ["Eduardo Ferreira Galego", ""],
           ["Eduardo Menezes de Morais", ""],
           ["Erika Guetti Suca", ""],
           ["Esdras Lins Bispo Junior", ""],
           ["Eudenia Xavier Meneses", ""],
           ["Eugênio Akihiro Nassu", ""],
           ["Fabiano Ferreira Luz", "https://www.ime.usp.br/~fluz/"],
           ["Felipe Martins dos Santos", ""],
           ["Felipe Ribas Serras", ""],
           ["Felipe Werndl Trevizan", ""],
           ["Felipe de Souza Salvatore", "https://felipessalvatore.github.io/"],
           ["Fernando Antonio Mac Cracken Cezar", ""],
           ["Fernando Correa Lima", ""],
           ["Filipe Correa Lima da Silva", ""],
           ["Fillipe Manoel Xavier Resina", ""],
           ["Fábio Natanael Kepler", ""],
           ["Fábio de Oliveira Franco", ""],
           ["Glauber de Bona", ""],
           ["Glauco Galves Bordin", ""],
           ["Gustavo Enrique Salazar Torres", ""],
           ["Gustavo Perez Katague", ""],
           ["Heitor Reis Ribeiro", ""],
           ["Ignasi Andrés Franch", "https://www.ime.usp.br/~ignasi"],
           ["Igor Cataneo Silveira", ""],
           ["Igor Ribeiro Sucupira", ""],
           ["Jandisson Soares de Jesus", ""],
           ["Jandson Santos Ribeiro Santos", "https://www.ime.usp.br/~jandson/"],
           ["Joelma Cristina Costa e Silva", ""],
           ["Joselyto Riani", ""],
           ["Juliana Sato Yamashita", ""],
           ["Juliano Mourão Vieira", ""],
           ["Julissa Giuliana Villanueva Llerena", ""],
           ["Karina Valdivia Delgado", ""],
           ["Kleber da Silva Xavier", ""],
           ["Leandro César Prudente", ""],
           ["Lucas Albuquerque Medeiros de Moura", "https://github.com/lucasmoura"],
	   ["Luis Gustavo Moneda dos Santos", "https://www.linkedin.com/in/luis-moneda-310b0010a/"],
           ["Luiz Carlos Vieira", ""],
           ["Marcelo de Moura Amorim", ""],
           ["Marcio Moretto Ribeiro", ""],
           ["Marisol Solis Yucra", ""],
           ["Michel Oleynik", ""],
           ["Mijail Gamarra Holguin", ""],
           ["Milton Raúl Condori Fernández", ""],
           ["Pablo César Calcina Ccori", ""],
           ["Pamela Rosy Revuelta Quintanilla", ""],
	   ["Paula Kintschev Santana de Moraes", "https://www.linkedin.com/in/paula-moraes-137a2ab9"],
           ["Paulo Roberto de Araújo França Nunes", ""],
           ["Paulo Salem da Silva", ""],
           ["Paulo Silveira", ""],
           ["Paulo de Tarso Guerra Oliveira", ""],
           ["Poliana Magalhães Reis", ""],
           ["Rafael Brito de Oliveira", ""],
           ["Raphael Mendes de Oliveira Cobe", ""],
	   ["Renato Lui Geh", "https://www.ime.usp.br/~renatolg"],
           ["Renato Urquiza Lundberg", ""],
           ["Ricardo Augusto Teixeira de Souza", ""],
           ["Ricardo Ferreira Guimarães", ""],
           ["Ricardo Guimaraes Herrmann", "https://www.ime.usp.br/~ricardof"],
           ["Rodrigo Constantin Ctenas Zaccara", ""],
           ["Rogerio Augusto dos Santos Fajardo", ""],
           ["Sandro Márcio da Silva Preto", ""],
           ["Silvio do Lago Pereira", ""],
           ["Simone Hanazumi", ""],
           ["Thiago Carvalho de Sousa", ""],
           ["Thiago Dias Simão", ""],
           ["Thiago Ildeu Albuquerque Lira", "https://github.com/ThiagoLira"],
	   ["Thiago Pereira Bueno", "https://github.com/thiagopbueno"],
           ["Vinícius Bitencourt Matos", ""],
           ["Vinícius Kiwi Daros", ""],
           ["Wellington Ricardo Pinheiro", ""],
           ["Wesley Seidel Carvalho", ""],
           ["William Daniel Colen de Moura Silva", ""],
           ["Yuri David Santos", ""],
           ["Ângelo Gregório Lovatto", ""],
           ["Daniel Baptista Dias", "https://www.dbdias.com/"]]

// Mudar conforme as pessoas vão entrando ou saindo. O nome deve ser *completo* e idêntico ao que
// aparece no https://teses.usp.br.
current = ["Sandro Márcio da Silva Preto",
	   "Erika Guetti Suca",
	   "Julissa Giuliana Villanueva Llerena",
	   "Viviane Bonadia dos Santos",
	   "Willy Reis",
	   "Felipe Ribas Serras",
	   "Igor de Camargo e Souza Câmara",
	   "Alan Barzilay",
	   "Augusto Camargo",
	   "Felipe Peressim",
	   "Gustavo de Mari Pereira",
       "Daniel Baptista Dias"]

var A = W.filter(alumni => !current.includes(alumni[0]));
A = A.sort(new Intl.Collator().compare);

var n = Math.ceil(A.length/2);
var a = A.slice(0, n);
var b = A.slice(n, A.length);

var s_a = aggregateAlumni(a);
var s_b = aggregateAlumni(b);

document.getElementById("alumni-column-a").innerHTML += s_a;
document.getElementById("alumni-column-b").innerHTML += s_b;
