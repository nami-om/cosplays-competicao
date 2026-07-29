let participantes = []
let participantesNegados = []

function mudarTela() {
    const telas = document.querySelectorAll(".tela")
    telas.forEach(function (tela) {
        tela.classList.remove("ativa")
    })
}
function realizarInscri() {
    mudarTela()
    document.getElementById("telaInscri").classList.add("ativa")
}
function mostrarPart() {
    mudarTela()
    document.getElementById("telaTotal").classList.add("ativa")
}


function finalizarInscri() {
    const novoPart = {
        id: Date.now(), //conta os milisegundos desde 1980 (vai ser necessário mais pra frente)
        nome_part: document.getElementById('input-nome_part').value,
        nome_perso: document.getElementById('input-nome_perso').value,
        midia: document.getElementById('input-midia').value,
        prop: document.getElementById('input-prop').value,
        modalidade: document.getElementById('input-modalidade').value,
        canon: document.getElementById('input-canon').checked,
    }
    if (novoPart.canon == true) {
        participantes.push(novoPart)
    } else {
        participantesNegados.push(novoPart)
    }
    console.log(participantes);
    console.log(participantesNegados);

    limparFormulario()
}


function limparFormulario() {
    document.getElementById('input-nome_part').value = ''
    document.getElementById('input-nome_perso').value = ''
    document.getElementById('input-midia').value = ''
    document.getElementById('input-prop').value = ''
    document.getElementById('input-modalidade').value = ''
    document.getElementById('input-nome_part').focus()
}



//mostrar participantes aceitos
//mostrar participantes negados - não canons
//como separar os aceitos dos negados?

function partTotais() {
    document.getElementById('painel-participantes').innerHTML = ''

    for (let i = 0; i < participantes.length; i++) {
        document.getElementById('painel-participantes').innerHTML +=
            `<div class="card-part">
           <h2>${participantes[i].nome_part}</h2>
           <p>Nome do personagem:<br> ${participantes[i].nome_perso}</p>
           <p>Mídia:<br> ${participantes[i].midia}</p>
           <p>Prop:<br> ${participantes[i].prop}</p>
           <p>Modalidade desejada:<br> ${participantes[i].modalidade}</p>
           <p>Canonico:<br> ${participantes[i].canon}</p>
        </div>
        `
    }
    for (let i = 0; i < participantesNegados.length; i++) {
        document.getElementById('painel-participantes').innerHTML +=
            `<div class="card-negado">
           <h2>${participantesNegados[i].nome_part}</h2>
           <p>Nome do personagem:<br> ${participantesNegados[i].nome_perso}</p>
           <p>Mídia:<br> ${participantesNegados[i].midia}</p>
           <p>Prop:<br> ${participantesNegados[i].prop}</p>
           <p>Modalidade desejada:<br> ${participantesNegados[i].modalidade}</p>
           <p>Canonico:<br> ${participantesNegados[i].canon}</p>
        </div>
        `
    }
}

document.getElementById('input-nome_part').addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        document.getElementById('input-nome_perso').focus()
    }
})
document.getElementById('input-nome_perso').addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        document.getElementById('input-midia').focus()
    }
})
document.getElementById('input-midia').addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        document.getElementById('input-prop').focus()
    }
})
document.getElementById('input-prop').addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        document.getElementById('input-modalidade').focus()
    }
})
document.getElementById('input-modalidade').addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        document.getElementById('input-nome_part').focus()
    }
})