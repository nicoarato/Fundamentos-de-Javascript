// promise

// const esperando = new Promise(function(resolve, reject) {

//     setTimeout(function() {
//         resolve('se ejecuto');
//     }, 5000);

// });

// esperando.then(function(mensaje) {
//     console.log(mensaje);

// })

const aplicarDescuento = new Promise(function(resolve, reject) {

    const descuento = false;

    if (descuento) {
        resolve('descuento aplicado.');
    } else {
        reject('No se puede aplicar descuento');
    }

});

aplicarDescuento.then(function(resultado) {
    console.log(resultado);
}).catch(function(error) {
    console.log(error)
});