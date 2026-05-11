'use strict'

const form = document.getElementById('formBusca');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById("anime").value;

    // exemplo fake (depois você pode puxar API)
    document.getElementById("titulo").innerText = "Wistoria: Wand and Sword";
    document.getElementById("descricao").innerText =
        "Aqui vai a descrição do anime...";
    document.getElementById("capa").src = "./imagem.png";

    // troca de tela
    document.getElementById("home").style.display = "none";
    document.getElementById("resultado").style.display = "block";
});

function voltar() {
    document.getElementById("home").style.display = "block";
    document.getElementById("resultado").style.display = "none";
}