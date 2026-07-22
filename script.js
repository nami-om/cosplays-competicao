let participantes = []
let participantesNegados = []

function cadastrarPart(){
    const novoPart = {
        id: Date.now(), //conta os milisegundos desde 1980 (vai ser necessário mais pra frente)
        nome_part: document.getElementById('input-nome_part').value,
        nome_perso: document.getElementById('input-nome_perso').value,
        midia: document.getElementById('input-midia').value,
        prop: document.getElementById('input-prop').value,
        modalidade: document.getElementById('input-modalidade').value,
        canon: document.getElementById('input-canon').checked,
    }
    if (novoPart.canon == 'true') {
        participantes.push(novoPart)
    }else{
        participantesNegados.push(novoPart)
    }
    console.log(participantes);
    console.log(participantesNegados);

    limparFormulario()
}

function limparFormulario(){
    document.getElementById('input-nome_part').value = ''
    document.getElementById('input-nome_perso').value = ''
    document.getElementById('input-midia').value = ''
    document.getElementById('input-prop').value = ''
    document.getElementById('input-modalidade').value = ''
    document.getElementById('input-nome_part').focus()
}

//mostrar participantes
//mostrar participantes aceitos
//mostrar participantes negados - não canons
//como separar os aceitos dos negados?

function mostrarPart(){
    document.getElementById('painel-participantes').innerHTML = ''

    for(let i = 0; i < participantes.length; i++){
        document.getElementById('painel-participantes').innerHTML +=
        `<div class="card-part">
           <h2>${participantes[i].nome_part}</h2>
           <p>Nome do personagem: ${participantes[i].nome_perso}</p>
           <p>Mídia: ${participantes[i].midia}</p>
           <p>Prop: ${participantes[i].prop}</p>
           <p>Modalidade desejada: ${participantes[i].modalidade}</p>
           <p>Canonico: ${participantes[i].canon}</p>
        </div>
        `
    }
    for(let i = 0; i < participantesNegados.length; i++){
        document.getElementById('painel-participantes').innerHTML +=
        `<div class="card-negado">
           <h2>${participantesNegados[i].nome_part}</h2>
           <p>Nome do personagem: ${participantesNegados[i].nome_perso}</p>
           <p>Mídia: ${participantesNegados[i].midia}</p>
           <p>Prop: ${participantesNegados[i].prop}</p>
           <p>Modalidade desejada: ${participantesNegados[i].modalidade}</p>
           <p>Canonico: ${participantesNegados[i].canon}</p>
        </div>
        `
    }
}

