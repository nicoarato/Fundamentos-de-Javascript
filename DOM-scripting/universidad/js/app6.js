const navegacion = document.querySelector('#principal');

// console.log(navegacion.nodeName);
// console.log(navegacion.childNodes); // cuenta los espacios
//Node son las etiquetas html
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

//tipo 1 html
//tipo 2 atributs
//tipo 3 textnode texto
//tipo 8 comentarios
//tipo 9 documentos
//tipo 10 doctype

// console.log(navegacion.children[0].textContent = 'Nuevo enlacesssss');

// const barra = document.querySelector('.barra');

// console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].firstElementChild);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].childElementCount);