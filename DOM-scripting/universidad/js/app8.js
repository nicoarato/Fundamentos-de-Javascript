let enlace = document.createElement('a');

enlace.className = 'enlace';
enlace.id = 'nuevo-id';
enlace.setAttribute('href', "#");
enlace.textContent = 'Nuevo Enlace';
// enlace.appendChild(document.createTextNode('Otro enlace'));

document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace)