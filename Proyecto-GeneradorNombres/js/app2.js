document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

let nombres;
let indice = 0;
let noms = [];

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
    url += '../nombres.json';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);




    xhr.onreadystatechange = function() {
        nombres = [];

        if (this.readyState == 4 && this.status == 200) {

            nombres = JSON.parse(this.responseText);

            let htmlNombres = '<h2>Nombres Generados</h2>';

            htmlNombres += '<ul class="lista">';

            noms = nombres;
            // filtro region
            if (origenSeleccionado !== '') {
                noms = ordenaRegion(nombres, origenSeleccionado);
            }
            // filtro sexo
            if (generoSeleccionado !== '') {
                noms = ordenaGenero(noms, generoSeleccionado);
            }
            // cantidad
            let indices = [];
            for (let i = 0; i < cantidad; i++) {
                indices.push(randomNumber(0, noms.length));
            }
            console.log(indices);

            // imprimo li
            for (let i = 0; i < indices.length; i++) {
                htmlNombres += `<li>${noms[indices[i]].name} - ${noms[indices[i]].region}</li>`;
            };
            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
            console.log('Estoy adentro: ', noms);
            noms = [];

        }
    }


    xhr.send();

}



function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}

function ordenaRegion(nombres, region) {
    let nombresPorRegion = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].region == region) {
            nombresPorRegion.push(nombres[i]);
        }
    }
    return nombresPorRegion;
}

function ordenaGenero(nombres, genero) {
    let nombresPorGenero = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].gender == genero) {
            nombresPorGenero.push(nombres[i]);
        }
    }
    return nombresPorGenero;
}