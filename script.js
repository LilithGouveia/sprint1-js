// Carrossel de imagens
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

// Validações de email, nome e telefone

const email = document.getElementById('email');
const form = document.querySelector('form');
const textEmail = document.getElementById('textEmail');
const telefone = document.getElementById('telefone');
const textFone = document.getElementById('textFone');
const nome = document.getElementById('nome');
const textName = document.getElementById('textName');


// Função que escuta quando o submit acontece, dispara as validações e 
// em caso de validação correta, dispara um alerta de cadastro realizado.
form.addEventListener('submit' , (e) => {
    // Usando preventDefault para tratar recarregamento de página
    e.preventDefault()
    alert('Cadastro realizado!')
})

function validarNome(nome) {
    if (nome.length < 2) {
      return false
    }
    return true
}

// Caso o usuário digite os dados de forma incorreta, 
// aparece uma mensagem com o formato esperado
// mensagem some após ser digitado corretamente

email.addEventListener("keyup", () => {
    if(email.value !== true){
        textEmail.textContent = "Formato: nome@mail.com"
    }
    else{
        textEmail.textContent = ''
    }
})

telefone.addEventListener('keyup', () => {
    if (telefone.value !== true) {
    textFone.textContent = 'Formato: (11)11111-1111';
    } else {
    textFone.textContent = '';
    }
});

nome.addEventListener('keyup', () => {
    if (nome.value !== true) {
    textName.textContent = 'No mínimo 2 caractéres';
    } else {
    textName.textContent = '';
    }
});

// Formata o numero de telefone enquanto
// o usuário digita.

telefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo
telefone.addEventListener('change', (e) => mascaraTelefone(e.target.value)); // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  telefone.value = valor; // Insere o(s) valor(es) no campo
};