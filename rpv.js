window.onload = () => {
    conse.log("tudo carregado");
}
    
const resultados = {

    brasil_marrocos: "X",
    haiti_escocia: "2",
    escocia_marrocos: null,
    brasil_haiti: null,
    escocia_brasil: null,
    marrocos_haiti: null

};

const jogos = {

    brasil_marrocos: {
        data: "2026-06-13T19:00:00"
    },

    haiti_escocia: {
        data: "2026-06-13T22:00:00"
    },

    escocia_marrocos: {
        data: "2026-06-19T19:00:00"
    },

    brasil_haiti: {
        data: "2026-06-19T21:30:00"
    },

    escocia_brasil: {
        data: "2026-06-24T19:00:00"
    },

    marrocos_haiti: {
        data: "2026-06-24T19:00:00"
    },


}

let palpites = {};

const salvo = localStorage.getItem(
    "palpites"
);

if(salvo){

    palpites = JSON.parse(salvo);

}

for(let jogo in palpites){

    const escolha = palpites[jogo];

    const copias = document.querySelectorAll(
        `[data-jogo="${jogo}"]`
    );

    copias.forEach(copia => {

        const botoes =
        copia.querySelectorAll(".palpite");

        botoes.forEach(botao => {

            if(
                botao.textContent.trim()
                ==
                escolha
            ){

                botao.classList.add(
                    "selecionado"
                );

            }

        });

    });

}

const bra_btn = document.getElementById("bra_btn");
const mar_btn = document.getElementById("mar_btn");
const hai_btn = document.getElementById("hai_btn");
const esc_btn = document.getElementById("esc_btn");

const bra_jgs = document.getElementById("jogosdobrasil");
const mar_jgs = document.getElementById("jogosdomarrocos");
const hai_jgs = document.getElementById("jogosdohaiti");
const esc_jgs = document.getElementById("jogosdaescocia");

let jatual = "b";

const grupos = document.querySelectorAll(".odd");

bra_btn.style.scale = "1.2";
bra_btn.style.boxShadow = "0 0 5px rgba(249, 226, 137, 0.1), 0 0 15px rgba(199, 159, 68, 0.3)";
bra_btn.style.marginBottom = "10px"

const cards1 = document.querySelectorAll(".off1");

const observer1 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            
            entry.target.classList.add("on");

        }

    });

});

cards1.forEach((card1) => {

    observer1.observe(card1);

});

const cards2 = document.querySelectorAll(".off2");

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            
            entry.target.classList.add("on");

        }

    });

});

cards2.forEach((card2) => {

    observer2.observe(card2);

});

bra_btn.onclick = function(){

    if(jatual !== "b"){

        bra_btn.style.scale = "1.2";
        bra_btn.style.boxShadow = "0 0 5px rgba(249, 226, 137, 0.1), 0 0 15px rgba(199, 159, 68, 0.3)";
        bra_btn.style.marginBottom = "10px";

        mar_btn.style.scale = "1";
        mar_btn.style.boxShadow = "0 0 0px transparent";
        mar_btn.style.marginBottom = "0px";

        hai_btn.style.scale = "1";
        hai_btn.style.boxShadow = "0 0 0px transparent";
        hai_btn.style.marginBottom = "0px";

        esc_btn.style.scale = "1";
        esc_btn.style.boxShadow = "0 0 0px transparent";
        esc_btn.style.marginBottom = "0px";

        if(jatual == "m"){
            mar_jgs.style.animation = "right_out 1s ease forwards"
            setTimeout(() => {

                mar_jgs.style.display = "none";

                bra_jgs.style.display = "flex";

                void bra_jgs.offsetWidth;
                
                bra_jgs.style.animation = "left_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "h"){
            hai_jgs.style.animation = "right_out 1s ease forwards"
            setTimeout(() => {

                hai_jgs.style.display = "none";

                bra_jgs.style.display = "flex";

                void bra_jgs.offsetWidth;

                bra_jgs.style.animation = "left_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "e"){
            esc_jgs.style.animation = "right_out 1s ease forwards"
            setTimeout(() => {

                esc_jgs.style.display = "none";

                bra_jgs.style.display = "flex";

                void bra_jgs.offsetWidth;

                bra_jgs.style.animation = "left_in 1s ease forwards";

            }, 250);
        }

    }


    jatual = "b";
}

mar_btn.onclick = function(){

    if(jatual !== "m"){

        mar_btn.style.scale = "1.2";
        mar_btn.style.boxShadow = "0 0 5px rgba(249, 226, 137, 0.1), 0 0 15px rgba(199, 159, 68, 0.3)";
        mar_btn.style.marginBottom = "10px";

        bra_btn.style.scale = "1";
        bra_btn.style.boxShadow = "0 0 0px transparent";
        bra_btn.style.marginBottom = "0px";

        hai_btn.style.scale = "1";
        hai_btn.style.boxShadow = "0 0 0px transparent";
        hai_btn.style.marginBottom = "0px";

        esc_btn.style.scale = "1";
        esc_btn.style.boxShadow = "0 0 0px transparent";
        esc_btn.style.marginBottom = "0px";

        if(jatual == "b"){
            bra_jgs.style.animation = "left_out 1s ease forwards"
            setTimeout(() => {

                bra_jgs.style.display = "none";

                mar_jgs.style.display = "flex";

                //void mar_jgs.offsetWidth;

                mar_jgs.style.animation = "right_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "h"){
            hai_jgs.style.animation = "right_out 1s ease forwards"
            setTimeout(() => {

                hai_jgs.style.display = "none";

                mar_jgs.style.display = "flex";

                void mar_jgs.offsetWidth;

                mar_jgs.style.animation = "left_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "e"){
            esc_jgs.style.animation = "right_out 1s ease forwards"
            setTimeout(() => {

                esc_jgs.style.display = "none";

                mar_jgs.style.display = "flex";

                void mar_jgs.offsetWidth;

                mar_jgs.style.animation = "left_in 1s ease forwards";

            }, 250);
        }

    }


    jatual = "m";
}

hai_btn.onclick = function(){

    if(jatual !== "h"){

        hai_btn.style.scale = "1.2";
        hai_btn.style.boxShadow = "0 0 5px rgba(249, 226, 137, 0.1), 0 0 15px rgba(199, 159, 68, 0.3)";
        hai_btn.style.marginBottom = "10px";

        mar_btn.style.scale = "1";
        mar_btn.style.boxShadow = "0 0 0px transparent";
        mar_btn.style.marginBottom = "0px";

        bra_btn.style.scale = "1";
        bra_btn.style.boxShadow = "0 0 0px transparent";
        bra_btn.style.marginBottom = "0px";

        esc_btn.style.scale = "1";
        esc_btn.style.boxShadow = "0 0 0px transparent";
        esc_btn.style.marginBottom = "0px";

        if(jatual == "b"){
            bra_jgs.style.animation = "left_out 1s ease forwards"
            setTimeout(() => {

                bra_jgs.style.display = "none";

                hai_jgs.style.display = "flex";

                void hai_jgs.offsetWidth;

                hai_jgs.style.animation = "right_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "m"){
            mar_jgs.style.animation = "left_out 1s ease forwards"
            setTimeout(() => {

                mar_jgs.style.display = "none";

                hai_jgs.style.display = "flex";

                void hai_jgs.offsetWidth;

                hai_jgs.style.animation = "right_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "e"){
            esc_jgs.style.animation = "right_out 1s ease forwards"
            setTimeout(() => {

                esc_jgs.style.display = "none";

                hai_jgs.style.display = "flex";

                void hai_jgs.offsetWidth;

                hai_jgs.style.animation = "left_in 1s ease forwards";

            }, 250);
        }

    }


    jatual = "h";
}

esc_btn.onclick = function(){

    if(jatual !== "e"){

        esc_btn.style.scale = "1.2";
        esc_btn.style.boxShadow = "0 0 5px rgba(249, 226, 137, 0.6), 0 0 15px rgba(199, 159, 68, 0.4)";
        esc_btn.style.marginBottom = "10px";

        mar_btn.style.scale = "1";
        mar_btn.style.boxShadow = "0 0 0px transparent";
        mar_btn.style.marginBottom = "0px";

        hai_btn.style.scale = "1";
        hai_btn.style.boxShadow = "0 0 0px transparent";
        hai_btn.style.marginBottom = "0px";

        bra_btn.style.scale = "1";
        bra_btn.style.boxShadow = "0 0 0px transparent";
        bra_btn.style.marginBottom = "0px";

        if(jatual == "b"){
            bra_jgs.style.animation = "left_out 1s ease forwards"
            setTimeout(() => {

                bra_jgs.style.display = "none";

                esc_jgs.style.display = "flex";

                void esc_jgs.offsetWidth;

                esc_jgs.style.animation = "right_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "m"){
            mar_jgs.style.animation = "left_out 1s ease forwards"
            setTimeout(() => {

                mar_jgs.style.display = "none";

                esc_jgs.style.display = "flex";

                void esc_jgs.offsetWidth;

                esc_jgs.style.animation = "right_in 1s ease forwards";

            }, 250);
        }

        if(jatual == "h"){
            hai_jgs.style.animation = "left_out 1s ease forwards"
            setTimeout(() => {

                hai_jgs.style.display = "none";

                esc_jgs.style.display = "flex";

                void esc_jgs.offsetWidth;

                esc_jgs.style.animation = "right_in 1s ease forwards";

            }, 250);
        }

    }

    jatual = "e";
}

function bloquearJogos(){

    const agora = new Date();

    document
    .querySelectorAll(".odd")
    .forEach(grupo => {

        const jogo =
        grupo.dataset.jogo;

        const inicio =
        new Date(jogos[jogo].data);

        if(agora >= inicio){

            grupo.classList.add(
                "bloqueado"
            );

        }

    });

}

bloquearJogos();



grupos.forEach(grupo => {

    const botoes = grupo.querySelectorAll(".palpite");

    botoes.forEach(botao => {

        botao.onclick = function(){

            if(grupo.classList.contains("bloqueado")){
                return;
            }
            
            const jogo = grupo.dataset.jogo;
            const escolha = botao.textContent.trim();
            palpites[jogo] = escolha;
            localStorage.setItem(
                "palpites",
                JSON.stringify(palpites)
            );
            const copias = document.querySelectorAll(
                `[data-jogo="${jogo}"]`
            );

            copias.forEach(copia => {

                const botoes = copia.querySelectorAll(".palpite");

                botoes.forEach(botao => {

                    botao.classList.remove(
                        "selecionado"
                    );

                });

            });

            copias.forEach(copia => {

                const botoes = copia.querySelectorAll(".palpite");

                botoes.forEach(botaoAtual => {

                    if(
                        botaoAtual.textContent.trim()
                        ==
                        escolha
                    ){

                        botaoAtual.classList.add(
                            "selecionado"
                        );

                    }

                });

            });

        };

    });

});



function verificarResultados(){

    let pontos = 0;

    for(let jogo in resultados){

        if(resultados[jogo] == null){

            continue;

        }

        const copias = document.querySelectorAll(
            `[data-jogo="${jogo}"]`
        );

        copias.forEach(copia => {

            copia.classList.remove(
                "correto",
                "errado",
                "sem-palpite"
            );

            const meuPalpite =
            palpites[jogo];

            if(!meuPalpite){

                copia.classList.add(
                    "sem-palpite"
                );

                return;
            }

            if(
                meuPalpite ==
                resultados[jogo]
            ){

                copia.classList.add(
                    "correto"
                );

            pontos++;

            }

            else{

                copia.classList.add(
                    "errado"
                );

            }

        });

    }

    localStorage.setItem(
        "pontos",
        pontos
    );

}

verificarResultados();
