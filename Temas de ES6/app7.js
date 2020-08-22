function crearIterador(carrito) {
    // inicializamos indice
    let i = 0;

    return {
        siguiente: () => {
            let fin = (i >= carrito.length);

            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin: fin,
                valor: valor
            }
        }
    }

}

const carrito = ['prod1', 'prod2', 'prod3'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());