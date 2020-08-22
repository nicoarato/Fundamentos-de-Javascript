// Generadores. es una finc que va a retornar un terador

function* crearGenerador() {
    // yield
    yield 1;
    yield 'Nombre';
    yield 3 + 3;

}

const iterador = crearGenerador();

// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);

function* nuevoGen(carrito) {
    for (let i = 0; i < carrito.length; i++)
        yield carrito[i];

}

const carrito = ['Producto1', 'Producto2', 'Producto3'];

// recorrer el iterador
let iterador2 = nuevoGen(carrito);

console.log(iterador2.next().value);
console.log(iterador2.next().done);
console.log(iterador2.next().value);