// Modelo de concurrencia o loop de eventos
// Event loop

console.log('Primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log('cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido')
}).then(console.log);

console.log('ultimo')