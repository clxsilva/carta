/**
 * Sorteio de uma carta
 * Exemplo de uso de um vetor
 * @author Claudio Henrique
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",]

    // sorteio de índice di vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let faceSorteada = faces[Math.floor(Math.random() * 13)]

    //    console.log(`${faceSorteada} de ${nipeSorteado}`)

    //    determinar a cor com base na carta sorteada no naipe
    let cor

    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }

    //    renderizar o canto superior esquerdo da carta
    //    a linha abaixo adiciona a div identificada como 'supEsq'
    // a face e o nipe sorteado e também tags <div> adicionais

    // renderizar o canto superior esquerdo
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // a linha abaixo muda o css referente a tag identificada
    document.getElementById('supEsq').style.color = cor

    // renderizar o centro da carta
    let cc = document.getElementById('centroC')
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (faceSorteada === 'Q' ){
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }
    cc.innerHTML = `${nipeSorteado}`
    cc.style.color = cor
    // document.getElementById('centroC').style.color = cor

    // renderizar o canto inferior direito
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor
}