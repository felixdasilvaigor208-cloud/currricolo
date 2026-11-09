
const nome = document.querySelector("#nome");
const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");


const corEditar = document.querySelector("#corEditar");
const corSair = document.querySelector("#corSair");


let cidadeAtual = "Anápolis - Goiás";


botaoEditar.addEventListener("click", function () {

    const novoNome = prompt("Digite seu nome completo:", nome.textContent);

    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

   
    const novaCidade = prompt(
        "Digite sua nova cidade:",
        cidadeAtual
    );

    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidadeAtual = novaCidade.trim();

      
        const paragrafos = document.querySelectorAll(".dados p");

        paragrafos.forEach(function (paragrafo) {
            if (paragrafo.textContent.includes("📍")) {
                paragrafo.textContent = "📍 " + cidadeAtual;
            }
        });
    }
});


botaoSair.addEventListener("click", function () {
    const desejaSair = confirm(
        "Você realmente deseja sair?"
    );

    if (desejaSair) {
        alert("Você confirmou que deseja sair!");

    } else {
        alert("Você continua no seu currículo!");
    }
});

corEditar.addEventListener("input", function () {
    botaoEditar.style.backgroundColor = corEditar.value;
});


corSair.addEventListener("input", function () {
    botaoSair.style.backgroundColor = corSair.value;
});
