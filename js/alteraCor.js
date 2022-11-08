const botao = document.querySelector('[data-mudar]')
const robotron = document.querySelector('[data-imagem]');
const botoesCor = document.querySelectorAll('.cor-botao');
let corDoBotao = 'preto'

//verifica o clique e armazena onde foi
botoesCor.forEach(element => {
    element.addEventListener('click', (elemento) =>{
        corDoBotao = elemento.target.getAttribute('data-cor');
        escolherCor(element);
        //salva a cor escolhida
    })
});

const cores = {
    //objeto com o caminho de cada imagem
    amarelo: 'img/robotron-amarelo.png',
    azul: 'img/robotron-azul.png',
    branco: 'img/robotron-branco.png',
    preto: 'img/robotron-preto.png',
    rosa: 'img/robotron-rosa.png',
    vermelho: 'img/robotron-vermelho.png',
}

//troca o robo ao clicar no botao 'mudar cor'
botao.addEventListener('click', () => {
    robotron.setAttribute('src',`${cores[corDoBotao]}`);
})

//remove a borda ao redor da cor escolhida
function escolherCor (botaoClicado) {
    botoesCor.forEach(element =>{
        if(element.classList.contains('botao-selecionado')){
            element.classList.remove('botao-selecionado');
        }
    })
    botaoClicado.classList.add('botao-selecionado');
}

//disponivel no github e no versel para teste :D