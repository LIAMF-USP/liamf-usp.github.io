const postdoc = [
    ["Sandro Preto", "sandropreto.jpg", "http://www.ime.usp.br/~spreto", "Logic and Probabilities"],
];

const phd = [
    ["Erika Guetti Suca", "guetti.jpg", "https://www.ime.usp.br/~eguetti", "Knowledge Representation, Ontologies, Privacy"],
    ["Julissa Villanueva", "julissa.jpg", "https://www.ime.usp.br/~jgville/", "Probabilistic Models, Machine Learning"],
    ["Viviane Bonadia dos Santos", "bonadia.jpg", "https://www.ime.usp.br/~vbonadia", "Automated Planning, Non-deterministic Planning"],
    ["Willy Reis", "willy.jpg", "https://www.linkedin.com/in/willy-reis-46b547110/", "Planning under uncertainty"],
    ["Felipe Serras", "frserras.jpg", "http://lattes.cnpq.br/4029213409557911", "Natural Language Processing, Natural Language Inference, Neural Attention Models"],
    ["Igor Câmara", "igorcsc.jpg", "https://igorcsc.github.io/", "Knowledge Representation & Reasoning, Logic, Defeasible Reasoning, Natural Language Processing"],
];

const msc = [
    ["Augusto Camargo", "augustocamargo.jpg", "https://www.researchgate.net/profile/Augusto_Camargo2", "Computational Linguistics, Machine Learning, Natural Language Processing"],
    ["Felipe Peressim", "felipe_peressim.jpg", "http://lattes.cnpq.br/2653869828243897", "Machine Learning, Deep Learning, Natural Language Processing"],
    ["Gustavo De Mari Pereira", "gustavo_de_mari_pereira.jpg", "http://www.gustavodemari.com.br", "Machine Learning, Reinforcement Learning, Probabilistic Planning"],
];

function template(S) {
    return `
    <div class="col-md-2 col-sm-2 fgrids">
        <div class="student-view">
            <img src="images/students/${S[1]}" alt="Student ${S[0]}" class="img-circle" />
        </div>
        <div class="student-ftext">
            <h6><a href="${S[2]}">${S[0]}</a></h6>
            <h6>${S[3]}</h6>
        </div>
    </div>
    `
}

function addMembers(which, S) {
    document.getElementById(which).innerHTML += S.map(x => template(x)).reduce((acc, s) => acc + s, "");
}

addMembers("postdoc", postdoc);
addMembers("phd", phd);
addMembers("msc", msc);
