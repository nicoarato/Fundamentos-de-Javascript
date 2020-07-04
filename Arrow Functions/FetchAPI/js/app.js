document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);



function cargarTXT() {
    fetch('datos.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data)
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(error => console.log(error));
}

function cargarJSON() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(empleado => {
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;

            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}

function cargarAPI() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(data => {
            let html = '';

            data.forEach(image => {

                html += `
                <li>
                    <a target="_blank" href="${image.post_url}"> Ver imagen</a>
                    ${image.author}
                </li>
                `;

            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}