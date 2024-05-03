let NomeAplicação = "Controle de acesso";
function mostrarMensagem() {
    console.log(`Acesso à aplicação ${NomeAplicação}`);
    alert(`Bem vindo à aplicação ${NomeAplicação}`);
}

window.onload = mostrarMensagem;