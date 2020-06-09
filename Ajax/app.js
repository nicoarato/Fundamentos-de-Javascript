// Info desde txt
document.getElementById('cargar').addEventListener('click', cargarDatos());

function cargarDatos() {
    // crear objeto xmlhttpreq
    const xhr = new XMLHttpRequest();

    // abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // una vez que carga
    // xhr.onload = function() {
    //     // 200 correcto | 403: prohibido | 404 no encontrado
    //     if (this.status === 200) {
    //         document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;

    //     }
    // }

    xhr.onreadystatechange = function() {
        console.log(`Estado ${this.readyState}`);
        if (this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText)

        }
    }

    /*
    0 no inicializado
    1 conexion establecida
    2 recibido
    3 procesado
    4 respuesta lista
     */

    // enviar el request
    xhr.send();
}