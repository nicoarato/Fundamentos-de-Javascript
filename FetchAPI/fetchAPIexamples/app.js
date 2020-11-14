const cargarTextBtn = document.querySelector('#cargarTxt');

cargarTextBtn.addEventListener('click', function() {

    const url = 'data/datos.txt';
    fetch(url)
        .then(respuesta => {
            //console.log(respuesta);
            return respuesta.text()
        })
        .then(datos => {
            console.log(datos)
        })
        .catch(err => {
            console.log(err)
        });
});

const cargarJsonBtn = document.querySelector('#cargarJson');

cargarJsonBtn.addEventListener('click', function() {

    const url = 'data/datos1.json';

    fetch(url)
        .then(respuesta => {

            // console.log(respuesta)
            return respuesta.json();
        })
        .then(datos =>
            mostrarHtml(datos)
        )
        .catch(err => {
            console.log(err)
        });

});

function mostrarHtml({ nombre, cantCorrales, cantVaquillas, cantVacas }) {

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML =
        `<p>Nombre: ${nombre}</p>
     <p>Cantidad de corrales: ${cantCorrales}</p>
     <p>Cantidad de Vaquillas: ${cantVaquillas}</p>
     <p>Cantidad de Vacas: ${cantVacas}</p>
    `;

}

cargarJsonArrayBtn = document.querySelector('#cargarJsonArray');

cargarJsonArrayBtn.addEventListener('click', function() {
    const url = 'data/datos2.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(
            datos => verdatos(datos)
        )
        .catch(err => console.log(err));
});

function verdatos(datos) {

    const contenido = document.querySelector('.contenido');
    html = '';
    datos.forEach(corral => {
        const { nombre, cantCorrales, cantVaquillas, cantVacas } = corral;

        html +=
            `<p>Nombre: ${nombre}</p>
            <p>Cantidad de corrales: ${cantCorrales}</p>
            <p>Cantidad de Vaquillas: ${cantVaquillas}</p>
            <p>Cantidad de Vacas: ${cantVacas}</p>
            <br>
    `;
    });
    contenido.innerHTML = html;
}

const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => verDatosApi(datos))
        .catch();

}

function verDatosApi(datos) {
    const contenido = document.querySelector('.contenido');
    html = '';

    datos.forEach(perfil => {
        const { author, author_url, post_url } = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href ="${author_url}" target="_blank" >Ver Autor</a>
            <a href ="${post_url}" target="_blank" >Ver imagen</a>
            <br>
        `;

    });

    contenido.innerHTML = html;

}