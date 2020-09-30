const abrirBtn = document.querySelector('#entrarPantallaCompleta');
const salirBtn = document.querySelector('#salirPantallaCompleta');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', exitPantallaCompleta);


function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function exitPantallaCompleta() {
    document.exitFullscreen();
}