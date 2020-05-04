//Event bubbling

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e) {
    console.log('Click en card');
    e.stopPropagation();
});
infoCurso.addEventListener('click', function(e) {
    console.log('Click en infocurso');
    e.stopPropagation();
});
agregarCarrito.addEventListener('click', function(e) {
    console.log('Click en agregara carrito');
    e.stopPropagation();
});