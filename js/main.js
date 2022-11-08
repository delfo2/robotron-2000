const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {  //objeto javascript para armazenar dados
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

                //a cada clique nos simbolos de + ou - o dado é enviado para as
                //funções Altera Valor e Atualiza Estatistica

controle.forEach(elemento => {elemento.addEventListener('click', (evento) => {
        alteraValor(elemento.getAttribute('data-controle'), elemento.parentNode);
        atualizaEstatistica(elemento.dataset.peca);
    })
});

                //recebe o valor e soma na tela quantos
                //braços, blindagens, pernas, etc tem atualmente
function alteraValor(valor, div){
    const tela = div.querySelector('[data-contador]');

    if(valor == '+'){
        tela.value = parseInt(tela.value) + 1;
    } else {
        tela.value = parseInt(tela.value) - 1;
    }
}


                //recebe o valor e faz os calculos a partir do objeto javascript
                //e atualiza as estatisticas do robô no instante do clique nos + e -
function atualizaEstatistica (peca) {
    console.log(pecas[`${peca}`]); //template string

    estatisticas.forEach(elemento =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[`${peca}`][elemento.dataset.estatistica];
    })
}