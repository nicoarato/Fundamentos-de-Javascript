const eventbrite = new EventBrite();
const ui = new Interfaz();

// listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // leer el texto del imput bucar
    const textoBuscador = document.getElementById('evento').value;
    // leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;


    // revisar texto de buscador
    if (textoBuscador !== '') {

        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                // console.log(eventos)
                if (eventos.events.length >= 1) {
                    // hay eventos
                    ui.limpiarResultados();
                    ui.mostrarEventos(eventos);
                } else {
                    // console.log('SIN eventos')
                    ui.monstrarMensaje('No hay resultados', 'alert alert-danger mt-4');
                }
            })

    } else {
        // mostrar mensaje
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }

});