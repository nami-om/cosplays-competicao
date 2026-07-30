let participantes = []
let participantesNegados = []



function testar() {

    // localStorage.setItem('teste', 20)
    // let testeDeLeitura = localStorage.getItem('teste')
    // console.log(testeDeLeitura)

    carregarDados()
    participantes = [

        {
            nome_part: "Ana Luíza Silva",
            nome_perso: "Hatsune Miku",
            midia: "Vocaloid",
            prop: "Microfone com pedestal",
            modalidade: "Desfile",
            canon: true,
            aceito: true
        },
        {
            nome_part: "Carlos Eduardo Ramos",
            nome_perso: "Geralt of Rivia",
            midia: "The Witcher 3",
            prop: "Espada de aço",
            modalidade: "Interpretativo",
            canon: true,
            aceito: true
        },
        {
            nome_part: "Beatriz Mendes",
            nome_perso: "Jinx",
            midia: "Arcane",
            prop: "Metralhadora Pow-Pow",
            modalidade: "Desfile",
            canon: true,
            aceito: true
        },
        {
            nome_part: "Lucas Gabriel Santos",
            nome_perso: "Tanjiro Kamado",
            midia: "Demon Slayer",
            prop: "Espada Nichirin",
            modalidade: "Interpretativo",
            canon: false,
            aceito: false
        },
        {
            nome_part: "Mariana Costa",
            nome_perso: "Zelda",
            midia: "The Legend of Zelda: Tears of the Kingdom",
            prop: "Cetro Real e Escudo Hylian",
            modalidade: "Desfile",
            canon: false,
            aceito: false
        }
    ]

    console.log(participantes)
    salvarDados()
}






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
    carregarDados()
    const novoPart = {
        id: Date.now(), //conta os milisegundos desde 1980 (vai ser necessário mais pra frente)
        nome_part: document.getElementById('input-nome_part').value,
        nome_perso: document.getElementById('input-nome_perso').value,
        midia: document.getElementById('input-midia').value,
        prop: document.getElementById('input-prop').value,
        modalidade: document.getElementById('input-modalidade').value,
        canon: document.getElementById('input-canon').checked,
        aceito: false
    }
    if (novoPart.canon == true) {
        novoPart.aceito = true
    }
    participantes.push(novoPart)
    console.log(participantes);
    console.log(participantesNegados);

    salvarDados()
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



let editando = -1

function editarCad(i) {
    editando = i
    carregarDados()
    document.getElementById('input-nome_part').value = participantes[i].nome_part;
    document.getElementById('input-nome_perso').value = participantes[i].nome_perso;
    document.getElementById('input-midia').value = participantes[i].midia;
    document.getElementById('input-prop').value = participantes[i].prop;
    document.getElementById('input-modalidade').value = participantes[i].modalidade;
    document.getElementById('input-canon').value = participantes[i].canon;

    document.getElementById("telaInscri").classList.add("ativa")

    // novoPart.splice(i, 1); 
}

function salvarEditado() {
    console.log(editando)
    console.log(participantes[editando])
    carregarDados()
    participantes[editando].nome_part = document.getElementById('input-nome_part').value
    participantes[editando].nome_perso = document.getElementById('input-nome_perso').value
    participantes[editando].midia = document.getElementById('input-midia').value
    participantes[editando].prop = document.getElementById('input-prop').value
    participantes[editando].modalidade = document.getElementById('input-modalidade').value
    participantes[editando].canon = document.getElementById('input-canon').value
    salvarDados()
}

function excluirCad(i) {
    carregarDados()
    participantes.splice(i, 1);
    salvarDados()
}


function salvarDados() {
    localStorage.setItem('participantes', JSON.stringify(participantes))

    // let texto = JSON.stringify(dinos)
    // localStorage.setItem('dinos', texto)
}

function carregarDados() {
    participantes = JSON.parse(localStorage.getItem('participantes')) || []
}



//mostrar participantes aceitos
//mostrar participantes negados - não canons
//como separar os aceitos dos negados?

function partTotais() {
    carregarDados()
    console.log(participantes);
    document.getElementById('painel-participantes-negados').innerHTML = ''
    document.getElementById('painel-participantes-aceitos').innerHTML = ''

    for (let i = 0; i < participantes.length; i++) {
        if (participantes[i].aceito == true) {

            document.getElementById('painel-participantes-aceitos').innerHTML +=
                `<div class="card-part">
            <h2>${participantes[i].nome_part}</h2>
            <p>Nome do personagem: ${participantes[i].nome_perso}</p>
            <p>Mídia: ${participantes[i].midia}</p>
            <p>Prop: ${participantes[i].prop}</p>
            <p>Modalidade desejada: ${participantes[i].modalidade}</p>
            <p>Canonico: ${participantes[i].canon}</p>
            
            <button class="container-button" onclick="editarCad(${i})">Editar</button>
            <button class="container-button" onclick="excluirCad(${i})">Excluir</button>
            </div>
            `
        }
    }
    for (let i = 0; i < participantes.length; i++) {
        if (participantes[i].aceito == false) {

            document.getElementById('painel-participantes-negados').innerHTML +=
                `<div class="card-negado">
            <h2>${participantes[i].nome_part}</h2>
            <p>Nome do personagem: ${participantes[i].nome_perso}</p>
            <p>Mídia: ${participantes[i].midia}</p>
            <p>Prop: ${participantes[i].prop}</p>
            <p>Modalidade desejada: ${participantes[i].modalidade}</p>
            <p>Canonico: ${participantes[i].canon}</p>
            
            <button class="container-buttonN" onclick="editarCad(${i})">Editar</button>
            <button class="container-buttonN" onclick="excluirCad(${i})">Excluir</button>
            </div>
            `
        }
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