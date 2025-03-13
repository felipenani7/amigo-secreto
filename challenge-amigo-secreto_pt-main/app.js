let nomes = [];
let sorteioRealizado = false;

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    // Verifica se o sorteio já foi realizado
    if (sorteioRealizado) {
        nomeInput.value = "Você não pode adicionar mais nomes, limpe o sorteio!"; // Altera o texto dentro do input
        nomeInput.style.color = "red";
        nomeInput.style.border = "2px solid red";
        
        setTimeout(() => {
            nomeInput.value = ""; // Limpa o input completamente
            nomeInput.style.color = "black";
            nomeInput.style.border = "1px solid black";
        }, 4000); // 4 segundos
        return;
    }

    // Verifica se o nome está vazio
    if (nome === "") {
        nomeInput.value = "Digite um nome válido!"; // Altera o texto dentro do input
        nomeInput.style.color = "red";
        nomeInput.style.border = "2px solid red";

        setTimeout(() => {
            nomeInput.value = ""; // Limpa o input completamente
            nomeInput.style.color = "black";
            nomeInput.style.border = "1px solid black";
        }, 4000); // 4 segundos
        return;
    }

    // Adiciona o nome e limpa o input
    nomes.push(nome);
    nomeInput.value = "";
    nomeInput.style.border = "1px solid black";
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