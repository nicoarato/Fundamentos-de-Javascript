// maps

let cliente = new Map();
cliente.set('nombre', 'karen');
cliente.set('tipo', 'premium');
cliente.set('saldo', 30000);

// acceder a valores

// console.log(cliente.get('nombre'))
// console.log(cliente.get('tipo'))
// console.log(cliente.get('saldo'))

// metodos

console.log(cliente.size)
console.log(cliente.has('tipo'))
console.log(cliente.get('tipo'))

cliente.delete('nombre');
console.log(cliente)
console.log(cliente.has('nombre'))

cliente.clear();
console.log(cliente);

// pasar valores por defecto
const paciente = new Map([
    ['nombre', 'paciente'],
    ['habitacion', 'No definido']

]);

paciente.set('nombre', 'Antonio');
paciente.set('habitacion', 400);
paciente.set('habitacion', 800);

// foreach
paciente.forEach((datos, index) => {
    console.log(`${index} : ${datos}`)
});

// console.log(paciente)