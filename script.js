let email = document.getElementById('email');
let form = document.querySelector('form')
let textForm = document.getElementById('textForm')
let textEmail = document.getElementById('textEmail')

form.addEventListener('submit' , (e) => {
    if(email.value == '' && password.value == ''){
        textForm.textContent = 'Preencha corretamente o campo!'
    }

    else if(validarEmail(email.value) === true){
        console.log(email.value);
        console.log(email.value);
        textForm.textContent = '';
        textEmail.textContent = '';
    }

    else{
        console.log("Requisição não atendida")
    }

    e.preventDefault()
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