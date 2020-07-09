//symbol como propiedades privadas

// const simbolo = Symbol();
// const simbolo2 = Symbol('Descripcion aqui');

// console.log(simbolo)
// console.log(simbolo2)

let nombre = Symbol();
let apellido = Symbol();

let persona = {};
persona.nombre = 'Juan';
persona[nombre] = 'Juan simbolo';
persona[apellido] = 'Torres';
persona.saldo = 100;
persona.tipoCliente = 'normal';

// console.log(persona)
// console.log(persona.nombre)
// console.log(persona[nombre])

for (let i in persona) {
    console.log(`${i} : ${persona[i]}`);

}