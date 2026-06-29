// =====================================================
// MODO ESCURO
// =====================================================

// Seleciona o botão de troca de tema
const botaoTema = document.getElementById("tema");

// Quando clicar no botão
botaoTema.addEventListener("click", () => {

    // Adiciona ou remove a classe "dark" do body
    document.body.classList.toggle("dark");

    // Altera o ícone do botão
    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }

});


// =====================================================
// FORMULÁRIO DE CONTATO
// =====================================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    // Impede o envio real do formulário
    event.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    const resultado = document.getElementById("resultado");

    // Verifica se existe algum campo vazio
    if(nome === "" || email === "" || mensagem === ""){

        resultado.style.color = "red";
        resultado.textContent = "Preencha todos os campos.";

        return;
    }

    // Verifica se o e-mail é válido
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){

        resultado.style.color = "red";
        resultado.textContent = "Digite um e-mail válido.";

        return;

    }

    // Simula envio da mensagem
    resultado.style.color = "green";
    resultado.textContent = "Mensagem enviada com sucesso!";

    // Limpa o formulário
    formulario.reset();

});


// =====================================================
// ANIMAÇÃO DAS SEÇÕES
// =====================================================

const secoes = document.querySelectorAll("section");

const aparecer = new IntersectionObserver((itens)=>{

    itens.forEach((item)=>{

        if(item.isIntersecting){

            item.target.style.opacity = "1";
            item.target.style.transform = "translateY(0px)";

        }

    });

});

secoes.forEach((secao)=>{

    secao.style.opacity = "0";
    secao.style.transform = "translateY(40px)";
    secao.style.transition = "0.8s";

    aparecer.observe(secao);

});