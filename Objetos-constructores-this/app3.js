function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;


}


// prototipo que imprime saldo y nombre

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre} - Saldo: ${this.saldo} `;
}

const cliente1 = new Cliente('Pedro', 1400);
console.log(cliente1.nombreClienteSaldo());



function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo); //Herencia de prototypes.
    this.telefono = telefono;
    this.tipo = tipo;
}

// heredar prototypes
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('SASASA', 1000000, 123456789, 'Educacion');

console.log(empresa);
console.log(empresa.nombreClienteSaldo());