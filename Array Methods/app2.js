// findIndex
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

let carrito = [
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Capa', precio: 500 },
    { nombre: 'Mosue', precio: 55 },
    { nombre: 'Silla', precio: 30 },
];

let indice = meses.findIndex(mes => mes === 'Abril');

indice = carrito.findIndex(prod => prod.precio === 55)

console.log(indice)