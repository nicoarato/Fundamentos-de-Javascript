const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');


// boton.addEventListener('click', obtenerEvento);

// boton.addEventListener('dblclick', obtenerEvento);
// boton.addEventListener('mouseenter', obtenerEvento);
// boton.addEventListener('mouseleave', obtenerEvento);
// boton.addEventListener('mouseover', obtenerEvento);
// boton.addEventListener('mouseout', obtenerEvento);
// boton.addEventListener('mousedown', obtenerEvento);
// boton.addEventListener('mouseup', obtenerEvento);

encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    console.log(`Evento: ${e.type}`);

}