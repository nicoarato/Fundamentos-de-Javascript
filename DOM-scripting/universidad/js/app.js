// const enlaces = document.querySelectorAll('.enlace');
// const navegacion = document.querySelector('#principal');

// enlaces[0].remove();
// navegacion.removeChild(enlaces[0]);

//console.log(enlaces);

const primerLi = document.querySelector('.enlace');

let elemento;

elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;


elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'https:www.google.com');

primerLi.setAttribute('data-id', 20);

//verifica que exista un atributo
elemento = primerLi.hasAttribute('data-id1');

primerLi.removeAttribute('data-id');


elemento = primerLi;
console.log(elemento);