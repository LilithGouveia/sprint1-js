// Pegando os inputs do HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Fazendo o botao criar os eventos
 botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        DesativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagem(indice);
    })
 })

 // Função para mostrar a imagem
function mostrarImagem(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

// Função para mudar o botão selecionado
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

// Função para esconder a imagem que era a ativa
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

// Função para mudar o botão selecionado
function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

let email = document.getElementById('email');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');
const telefone = document.getElementById('telefone').value;
console.log(telefone)

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    if(email.value == ''){
        textForm.textContent = 'Preencha corretamente o campo!'
    }

    else if(validarEmail(email.value) === true){
        console.log(email.value);
        // textForm.textContent = '';
        textEmail.textContent = '';
    }

    else if (validarNome(nome.value) === false){
        textForm.textContent = 'Nome inválido!'
    }

    else{
        console.log("Requisição não atendida")
    }

    alert('Cadastro realizado!')
})

email.addEventListener("keyup", () => {
    if(validarEmail(email.value) !== true){
        textEmail.textContent = "Formato: nome@mail.com"
    }
    else{
        textEmail.textContent = ''
    }
})

function validarEmail(email){
    let emailFirst = /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/;
    return emailFirst.test(email)
}

function validarNome(nome) {
    if (nome.length < 2) {
      return false
    }
    return true
}
