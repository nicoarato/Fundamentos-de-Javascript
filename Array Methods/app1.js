// Funciones de arrays
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

let carrito = [
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Capa', precio: 500 },
    { nombre: 'Mosue', precio: 55 },
    { nombre: 'Silla', precio: 30 },
];

// busqueda dentro de array simple
let resultado = meses.includes('Enero');

// array de objetos
resultado = carrito.some((prod) => {
    return prod.nombre === 'Capa';
})

// tambien para array simple
resultado = meses.some(mes => mes === 'Marzo');

console.log(resultado)