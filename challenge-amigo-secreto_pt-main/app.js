//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();
    
    if (nome === "") {
        nomeInput.placeholder = "Digite um nome válido!";
        nomeInput.style.color = "red";
        setTimeout(() => {
            nomeInput.placeholder = "Digite um nome";
            nomeInput.style.color = "black";
        }, 2000);
        return;
    }

    nomes.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os novos nomes

    nomes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const botaoLimpar = document.getElementById("botaoLimpar");

    if (nomes.length === 0) {
        resultado.innerHTML = "<li style='color: red;'>Adicione pelo menos um amigo antes de sortear!</li>";
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];

    resultado.innerHTML = `<li style="color: green; font-weight: bold;">🎉 O amigo secreto sorteado é : ${amigoSorteado}! 🎉</li>`;
    
    botaoLimpar.style.display = "block"; // Exibe o botão de limpar
}

function limparSorteio() {
    nomes = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("botaoLimpar").style.display = "none"; // Esconde o botão após limpar
}

