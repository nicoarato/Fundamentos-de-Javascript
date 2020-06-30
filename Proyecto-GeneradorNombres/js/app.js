document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();
    console.log('SII');

    //leer variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'https://uinames.com/api/?';

    //si hay un origen
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    //si hay un genero seleccionado
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    //si hay un numero seleccionado
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }

    // conectar con ajax
    // iniciar XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    // abrimos conexion
    xhr.open('GET', url, true);
    // datos e impresion del template
    xhr.onload = function() {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);
            // generar html
            let htmlNombres = '<h2>Nombres Generados</h2>';

            htmlNombres += '<ul class="lista">';

            nombres.forEach(function(nombre) {
                htmlNombres += `<li>${nombre.name}</li>`;
            });
            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    };
}