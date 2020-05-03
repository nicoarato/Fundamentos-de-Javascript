let enlaces = document.getElementsByClassName('enlace');

enlaces = enlaces[3];

enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';


const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

const links = document.getElementsByTagName('a');


links[18].style.color = 'red';
links[18].textContent = 'Otro enlace';

let enlaces2 = Array.from(links);

enlaces2.forEach(function(enlace) {
    console.log(enlace.textContent);
})

// console.log(enlaces2);