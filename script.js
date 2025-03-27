var button = document.getElementById('btn');
var senha  = document.getElementById('senha');
var email  = document.getElementById('email');
var msg    = document.getElementById('msgerro');
var form = document.querySelector('form');

button.addEventListener('click', (event) => {
    event.preventDefault();

    msg.style.display = 'none';
    // VALIDAÇÕES DOS CAMPOS DE INPUT

    if (email.value === '' || senha.value === '') {
        msg.style.display = 'block';
        msg.textContent = 'Usuário e senha não preenchidos.';
        return;
    } 
    if (senha.value.length < 8) {
        msg.style.display = 'block';
        msg.textContent = 'Senha deve ter no mínimo 8 caracteres.';
        return; // SAI DA FUNÇÃO SE A VALIDAÇÃO FALHAR.
    } else {
        msg.style.display = 'none';
    }

    // SE TODAS AS ANIMAÇÕES PASSAREM, EXECUTA A ANIMAÇÃO.

    form.classList.add('oculta-form');
});

// REMOVE A MSG DE ERRO QUANDO O USUÁRIO COMEÇA A DIGITAR.

function removeMsgErro() {
    msg.style.display = 'none';
};

email.addEventListener("input", removeMsgErro);
senha.addEventListener("input", removeMsgErro);

// REDIRECIONA PARA A PÁGINA SITE.HTML APÓS A ANIMAÇÃO DE OCULTAR O FORMULÁRIO.

form.addEventListener('animationend', (event) => {
    if(event.animationName === 'top') {
    window.location.href = 'site.html';
    email.value = '';
    senha.value = '';  
    msg.textContent = '';
}
});