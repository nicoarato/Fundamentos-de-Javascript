// const enlaces = document.querySelectorAll('.enlace');
// console.log(enlaces[0].parentNode)
// console.log(enlaces[0].parentElement) //recomendado
// console.log(enlaces[0].parentElement.parentElement) //recomendado

const cursos = document.querySelectorAll('.card');

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde traversing');

const enlaces = document.querySelectorAll('.enlace');

// console.log(enlaces[4].previousElementSibling.previousElementSibling)
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4])