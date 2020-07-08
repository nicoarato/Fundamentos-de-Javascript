// drestucturing forma anterior

// function reservacion(completo, opciones) {
//     opciones = opciones || {};
//     // se mapea cada valor
//     let metodo = opciones.metodoPago,
//         cantidad = opciones.cantidad,
//         dias = opciones.dias;

//     console.log(metodo);
//     console.log(cantidad);
//     console.log(dias);
// }

// destructuring nuevo
// function reservacion(completo, opciones) {

//     let { metodoPago, cantidad, dias } = opciones;

//     console.log(metodoPago);
//     console.log(cantidad);
//     console.log(dias);
// }

// //llamo a la funcion
// reservacion(
//     true, {
//         metodoPago: 'tarjeta',
//         cantidad: 2000,
//         dias: 3
//     }
// );
// OTROOO
// destructuring nuevo
function reservacion(completo, {
    metodoPago = 'efectivo',
    cantidad = 0,
    dias = 0
} = {}) {

    if (completo) {
        console.log('Proceder a reservar...');
        // let { metodoPago, cantidad, dias } = opciones;
        console.log(metodoPago);
        console.log(cantidad);
        console.log(dias);

    } else {
        console.log('Abandonar')
    }
}

//llamo a la funcion
reservacion(
    true
);