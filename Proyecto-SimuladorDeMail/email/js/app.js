const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


eventListeners();

function eventListeners() {
    //inicio de la app
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton de enviar 
    formularioEnviar.addEventListener('submit', enviarEmail);

    //boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}


//inicio de la app y desabilita boton de enviar
function inicioApp() {
    btnEnviar.disabled = true;
}

//valida campo
function validarCampo() {

    //se valida longitud del texto y que no este vacio
    validarLongitud(this);

    //validar email
    if (this.type == 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {

        if (errores.length === 0) {
            btnEnviar.disabled = false;

        }
    }

}

//cuando envia correo
function enviarEmail(e) {
    //spinner al presinar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //gif que envia mail
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spinner y mostrar enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);
    e.preventDefault();

}


function validarLongitud(campo) {
    // console.log(campo.value.length);

    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = ' green';
        campo.classList.remove('error');

    } else {
        campo.style.borderBottomColor = ' red';
        campo.classList.add('error');
    }
}

//resetea formulario
function resetFormulario(e) {
    e.preventDefault();
    formularioEnviar.reset();
}