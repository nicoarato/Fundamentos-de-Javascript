const ciudades = ['Londres', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'juan');
datos.set('profesion', 'Devops');

// console.log(ciudades);
// console.log(ordenes);
// console.log(datos);

for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

// for (let entrada of ordenes.entries()) {
//     console.log(entrada);
// }

// for (let entrada of datos.entries()) {
//     console.log(entrada);
// }



for (let entrada of datos.values()) {
    console.log(entrada);
}

// for (let entrada of ciudades.values()) {
//     console.log(entrada);
// }

// for (let entrada of ordenes.values()) {
//     console.log(entrada);
// }

// keys iterador

for (let entrada of ordenes.keys()) {
    console.log(entrada);
}

for (let entrada of datos.keys()) {
    console.log(entrada);
}

// for (let entrada of ciudades.keys()) {
//     console.log(entrada);
// }

//default ()imprime el valor
for (let entrada of ordenes) {
    console.log(entrada);
}

for (let entrada of datos) {
    console.log(entrada);
}

//otro ejemplo
const mensaje = 'Aprendiendo Javascript';

for (let letra of mensaje) {
    console.log(letra)
}

const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(`${enlace}  `);
}