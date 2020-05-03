//eventListener click al buscador

document.querySelector('#submit-buscador').addEventListener('click', ejecuarBoton);

function ejecuarBoton(e) {
    e.preventDefault(); //previene accion por default
    // console.log('Desde la funcion ejecutarBoton');
    let elemento;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;

    console.log(elemento);
}

document.querySelector('#encabezado').addEventListener('click', function(e) {

    e.target.innerText = 'Nuevo encabezado.';
});