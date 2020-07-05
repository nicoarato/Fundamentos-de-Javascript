const cotizador = new API('fa1f40a4e0245333b64432746dfec7c0271b49ba3eaa40f66eaf0ea4a3d51486');
const ui = new Interfaz();



const fomulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.value;

    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.value;

    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // Alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center')
    } else {
        //todo OK -> consultar API
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            });
    }

})