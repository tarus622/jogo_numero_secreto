let numeroSecreto;
let numeroTentativas;
const botaoChute = document.querySelector('button');
const botaoReiniciar = document.getElementById('reiniciar');

iniciarJogo();

function gerarNumeroAleatorio() {
    return Math.round(Math.random() * 10);
};

function exibirTexto(tag, text) {
    document.querySelector(tag).innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function verificarChute() {
    numeroTentativas++;
    const chute = document.querySelector('input');
    if (numeroSecreto === Number(chute.value)) {
        exibirTexto('p', `Você acertou! Número de tentativas: ${numeroTentativas}`);
        chute.value = '';
        botaoReiniciar.disabled = false;
        botaoChute.disabled = true;
    } else {
        if (numeroSecreto < Number(chute.value)) {
            exibirTexto('p', `O número secreto é menor!`);
            chute.value = '';
        } else {
            exibirTexto('p', `O número secreto é maior!`);
            chute.value = '';
        }
    }
}

function iniciarJogo() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    botaoReiniciar.disabled = true;
    botaoChute.disabled = false;

    numeroSecreto = gerarNumeroAleatorio();
    numeroTentativas = 0;
}