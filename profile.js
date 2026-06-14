let palpites = {};

const salvo = localStorage.getItem(
    "palpites"
);

if(salvo){

    palpites = JSON.parse(salvo);

}

console.log(palpites);

const resultados = {

    brasil_marrocos:  "X",
    haiti_escocia: "2",
    escocia_marrocos: null,
    brasil_haiti: null,
    escocia_brasil: null,
    marrocos_haiti: null

};

const cards = document.querySelectorAll(".off");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("on");

        }

    });

});

cards.forEach((card) => {

    observer.observe(card);

});

let acertos = 0;
let erros = 0;
let naoPalpitados = 0;

for(let jogo in resultados){

    const resultado = resultados[jogo];
    const palpite = palpites[jogo];

    if(!palpite){

        naoPalpitados++;

        continue;

    }

    if(resultado == null){

        continue;

    }

    if(palpite == resultado){

        acertos++;

    }

    else{

        erros++;

    }

}

document.getElementById("acertos").textContent =
acertos;

document.getElementById("erros").textContent =
erros;

document.getElementById("nao_palpitados").textContent =
naoPalpitados;

const rank =
document.getElementById("rank");

if(acertos <= 1){

    rank.src = "bronze.png";

}

else if(acertos <= 3){

    rank.src = "prata.png";

}

else if(acertos <= 5){

    rank.src = "ouro.png";

}

else{

    rank.src = "craque.png";

}

const cardsHistorico =
document.querySelectorAll(".oddbox");

cardsHistorico.forEach(card => {

    const jogo =
    card.dataset.jogo;

    const resultado =
    resultados[jogo];

    const palpite =
    palpites[jogo];

    const simbolo =
    card.querySelector("strong");

    const opcoes =
    card.querySelectorAll(".option");

    if(!palpite){

        simbolo.innerHTML = "Ø";

        return;

    }

    opcoes.forEach(opcao => {

        if(
            opcao.dataset.opcao
            ==
            palpite
        ){

            opcao.classList.add(
                "meu-palpite"
            );

        }

    });

    if(resultado == null){

        simbolo.innerHTML = "⧗";

        return;

    }

    if(palpite == resultado){

        simbolo.innerHTML = "✓";

    }

    else{

        simbolo.innerHTML = "✗";

        opcoes.forEach(opcao => {

            if(
                opcao.dataset.opcao
                ==
                resultado
            ){

                opcao.classList.add(
                    "resultado-correto"
                );

            }

        });

    }

});
