let nomes = [];
let sorteioRealizado = false;

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    // Verifica se o sorteio já foi realizado
    if (sorteioRealizado) {
        exibirMensagemErro(nomeInput, "Você não pode adicionar mais nomes, limpe o sorteio!");
        return; // Retorna sem adicionar à lista
    }

    // Verifica se o nome está vazio ou se é uma mensagem de erro
    if (nome === "" || nome === "Digite um nome válido!" || nome === "Você não pode adicionar mais nomes, limpe o sorteio!") {
        exibirMensagemErro(nomeInput, "Digite um nome válido!");
        return; // Retorna sem adicionar à lista
    }

    // Adiciona o nome e limpa o input
    nomes.push(nome);
    nomeInput.value = "";
    nomeInput.style.border = "1px solid black";
    atualizarLista();
}

function exibirMensagemErro(input, mensagem) {
    input.value = mensagem; // Altera o texto dentro do input
    input.style.color = "red";
    input.style.border = "2px solid red";

    setTimeout(() => {
        input.value = ""; // Limpa o input completamente
        input.style.color = "black";
        input.style.border = "1px solid black";
    }, 4000); // 4 segundos
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

    resultado.innerHTML = `<li style="color: green; font-weight: bold;">🎉 O amigo secreto sorteado é: ${amigoSorteado}! 🎉</li>`;
    
    botaoLimpar.style.display = "block";
    sorteioRealizado = true; // Marca que o sorteio foi realizado
}

function limparSorteio() {
    nomes = [];
    sorteioRealizado = false; // Reseta o estado do sorteio
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("botaoLimpar").style.display = "none";
}