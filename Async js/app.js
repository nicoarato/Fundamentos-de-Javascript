// Ejemplo 1
// // callback en foreach

// const ciudades = ['Londres', 'Paris', 'Madrid', 'Milan'];

// // inline callback
// ciudades.forEach(function(ciudad) {
//     console.log(ciudad);

// });

// // con funcion definida
// function callB(ciudad) {
//     console.log(ciudad);

// }

// ciudades.forEach(callB);


// Ejemplo2
const paises = ['Francia', 'España', 'Portugal', 'Irlanda', 'Belgica'];

// se agrega un nuevo pais despues de 2 seg
function nuevoPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
    }, 2000);
}

function monstrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('lista').innerHTML = html;
    }, 1000);
}


nuevoPais('Alemania', monstrarPaises);
monstrarPaises();