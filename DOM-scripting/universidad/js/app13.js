const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keydown', obtenerEvento);
// busqueda.addEventListener('keyup', obtenerEvento);
// busqueda.addEventListener('keypress', obtenerEvento);
// busqueda.addEventListener('focus', obtenerEvento);
// busqueda.addEventListener('blur', obtenerEvento);
// busqueda.addEventListener('cut', obtenerEvento);
// busqueda.addEventListener('copy', obtenerEvento);
// busqueda.addEventListener('paste', obtenerEvento);
// busqueda.addEventListener('input', obtenerEvento);
// busqueda.addEventListener('change', obtenerEvento);
busqueda.addEventListener('input', obtenerEvento);





function obtenerEvento(e) {
    // document.querySelector('#encabezado').innerText = busqueda.value;

    console.log(`EVENTO: ${e.type}`)

}