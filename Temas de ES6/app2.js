// destructuring a arreglos y objetos

const ciudades = ['Londres', 'Madrid', 'Paris'];

const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

const [, , paris] = ciudades;

console.log(paris)

// otro ejemplo

const cliente = {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}

let {
    tipo,
    datos,
    datos: { residencia },
    movimientos: [, dos]
} = cliente;

// console.log(uno);
console.log(dos);
// console.log(datos);
// console.log(residencia);