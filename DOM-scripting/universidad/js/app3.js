//query selector

const encabezado = document.querySelector('.encabezado');

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';

const emc = document.querySelector('h1');


let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:last-child');
enlace = document.querySelector('#principal a:nth-child(3)');

console.log(enlace);