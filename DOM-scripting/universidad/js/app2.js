let elemento;

elemento = document.getElementById('header').className;

let encabezado = document.getElementById('encabezado').className;
encabezado = document.getElementById('encabezado').textContent;
encabezado = document.getElementById('encabezado').innerText;
encabezado = document.getElementById('encabezado');

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

encabezado.textContent = 'Los mejores cursos';
encabezado.innerText = 'Los mejores cursos';




console.log(encabezado);