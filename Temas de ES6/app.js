// const cliente = {
//     nombre: 'Alejandra',
//     tipo: 'Premium'

// }

// antes
// let nombre = cliente.nombre;
// let tipo = cliente.tipo;

// ahora
// let { nombre, tipo } = cliente;
// console.log(nombre);
// console.log(tipo);

// const cliente = {
//     tipo: 'Premium',
//     nombre: 'Alejandra',
//     datos: {
//         ubicacion: {
//             ciudad: 'Jalisco',
//             pais: 'MExico'
//         },
//         cuenta: {
//             desde: '18-12-2012',
//             saldo: 4000
//         }
//     }
// }

// let { datos: { ubicacion } } = cliente;
// console.log(ubicacion)
// let { datos: { cuenta } } = cliente;
// console.log(cuenta)

const cliente = {
    nombre: 'Pedro',
    tipo: 'Premium',

}

let { nombre, tipo, saldo = 0 } = cliente
console.log(nombre)
console.log(tipo)
console.log(saldo)