const pendientes = ["tarea", "comer", "proyecto", "aprender js"];

pendientes.forEach((element, index) => {
    console.log(`${element} en la posición ${index}`)
});

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Casa' },
    { id: 3, producto: 'Lápiz' },
    { id: 4, producto: 'Cenicero' },
];

const elementos = carrito.map((carrito) => {
    return carrito.producto;
});

console.log(elementos);


const automovil = {
    modelo: 'Camaro',
    motor: 6.4,
    marca: 'chevrolet'
}

for (let auto in automovil) {
    console.log(`${auto} : ${ automovil[auto] }`);
}