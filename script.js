const chavesEncriptacao = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
const cx_msg_entr = document.querySelector('.section__imput__cxEntrada');
const cx_msg_saida = document.querySelector('.section__output__cxSaida');
const img_cx_msg_saida = document.querySelector('.section__output__imgCxMsgSaida');
const avisos_cx_msg_saida = document.querySelector('.section__output__avisos');
const visibilidadeBtnCopiar = document.querySelector('.section__output__btnCopiar');

function btnCrip() {
    const textoEncriptado = encriptar(cx_msg_entr.value);
    cx_msg_saida.value = textoEncriptado;
    cx_msg_entr.value = "";
    esconderTextoEImagem();
}

function btnDescrip() {
    const textoDesencriptado = desencriptar(cx_msg_entr.value);
    cx_msg_saida.value = textoDesencriptado;
    cx_msg_entr.value = "";
    esconderTextoEImagem();
}

function funcaoCopiar() {
    navigator.clipboard.writeText(cx_msg_saida.value).then(() => {
        alert('Texto copiado!');
    });
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < chavesEncriptacao.length; i++) {
        if (stringEncriptada.includes(chavesEncriptacao[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(chavesEncriptacao[i][0], chavesEncriptacao[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < chavesEncriptacao.length; i++) {
        if (stringDesencriptada.includes(chavesEncriptacao[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(chavesEncriptacao[i][1], chavesEncriptacao[i][0]);
        }
    }
    return stringDesencriptada;
}

function esconderTextoEImagem() {
    if (cx_msg_saida.value.trim() !== '') {
        visibilidadeBtnCopiar.style.display = 'block';
        img_cx_msg_saida.style.display = 'none';
        avisos_cx_msg_saida.style.display = 'none';
    } else {
        visibilidadeBtnCopiar.style.display = 'none';
        img_cx_msg_saida.style.display = 'block';
        avisos_cx_msg_saida.style.display = 'flex'; 
    }
}

function apareceBotao() {
    cx_msg_saida.addEventListener('input', () => {
        esconderTextoEImagem();
    });

    esconderTextoEImagem();
}

document.addEventListener('DOMContentLoaded', () => {
    apareceBotao();
});