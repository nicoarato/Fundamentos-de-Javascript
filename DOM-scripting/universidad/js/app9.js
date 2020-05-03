//reemplazar elementos

const nuevoEncabezado = document.createElement('h2');

nuevoEncabezado.id = 'encabezado';

nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

//elemetno anterior sera reemplazado

const anterior = document.querySelector('#encabezado');

const elPadre = document.querySelector('#lista-cursos');

elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado)
console.log(anterior.parentElement)