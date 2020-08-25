let carrito = [
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Capa', precio: 500 },
    { nombre: 'Mosue', precio: 55 },
    { nombre: 'Silla', precio: 30 },
];

let total = 0;

// foreach
carrito.forEach(prod => total += prod.precio);
console.log(total);

// con reduce

let resultado = carrito.reduce((total, prod) => total + prod.precio, 0);
console.log(resultado)

// filter
// crea una nueva lista
let lista = carrito.filter(prod => prod.precio > 100);
console.log(lista)

// find 
let resultado2 = carrito.find(prod => prod.nombre === 'Silla');
console.log(resultado2)

// every true o false si todos los elemenots cumplen la condicion
let result = carrito.every(prod => prod.precio < 1000);
console.log(result)

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
let meses2 = ['Agosto', 'Septiembre'];

resultado = meses.concat(meses2)
console.log(resultado)

resultado = [...meses, ...meses2];
console.log(resultado)

producto = { nombre: 'Guantes', precio: 102 };
res2 = [...carrito, producto];
console.log(res2);