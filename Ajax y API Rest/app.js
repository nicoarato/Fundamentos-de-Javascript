const cargarPosts = document.querySelector('#cargar');

cargarPosts.addEventListener('click', cargarApi);

function cargarApi() {
    // crear el obj
    const xhr = new XMLHttpRequest();
    // abrir la conexion
    xhr.open('GET', 'https://reqres.in/api/users', true);
    // carga y lee datos
    xhr.onload = function() {
            if (this.status === 200) {
                const respuesta = JSON.parse(this.responseText);
                let elemento = respuesta.data;
                console.log(elemento);
                let contenido = '';
                elemento.forEach(function(post) {
                    contenido += `
                    <div>
                        <h3>${post.first_name} ${post.last_name}</h3>
                        <p>${post.email}</p>
                        <img src="${post.avatar}">
                    </div>`;
                });
                document.getElementById('listado').innerHTML = contenido;

            }
        }
        // enviar la conexion
    xhr.send();
}