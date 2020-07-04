let aprendiendo;

aprendiendo = function() {
    console.log('Esto es una funcion normal.');
}

aprendiendo = () => {
    console.log('Esto es una arrow function.');
}

// una linea no requiere llave
aprendiendo = () => console.log('Arrow de una linea');

// así retorna un valor
aprendiendo = () => 'Esto es un valor retornado...'
    // console.log(aprendiendo());

// retornando un objeto
aprendiendo = () => ({ valor: 'Esto es un objeto' })

// pasando parametro
aprendiendo = (tecnologia) => `Aprendiendo ${tecnologia}`;

// pasando un parametro
aprendiendo = tecnologia => `Aprendiendo ${tecnologia}`;
// console.log(aprendiendo('Javascript'));

// pasando mas parametros
aprendiendo = (tec1, tec2) => `Aprendiendo ${tec1} y ${tec2}`;
// console.log(aprendiendo('js', 'otras tecnologías'))

// con un callback
const producto = ['disco', 'camisa', 'guitarra'];

// const letrasProducto = producto.map(function(prod) {
//     return prod.length;
// });
// con arrow function
const letrasProducto = producto.map(prod => {
    return prod.length;
});
const letrasProducto1 = producto.map(prod => prod.length);
// console.log(letrasProducto1);

// con el foreach

producto.forEach(function(prod) {
    console.log(prod)
})

producto.forEach(prod => console.log(prod));