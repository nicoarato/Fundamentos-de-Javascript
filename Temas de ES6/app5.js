let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco duro');
carrito.add('Disco ssd');

// no agrega duplicados
carrito.add('Disco ssd');


// inicializando
let numeros = new Set([51, 6, 32, 1, 5, 321, 1, 5132, 1, 5, 2]);

// comprobar si existe valor
console.log(numeros.has(5))

// eliminar algo del set
carrito.delete('Camisa');
console.log(carrito);

// vaciar set
carrito.clear();
console.log(carrito);
let carrito2 = new Set(['remera', 'short', 'jean', 'pantalon']);

// recorrer
carrito2.forEach(producto => {
    console.log(producto);
});

// la llave y el valor son lo mismo
carrito2.forEach((producto, index) => {
    console.log(`${index} : ${producto}`);
});

// convertir set => array

const arregloCarrito = [...carrito2];
console.log(arregloCarrito);