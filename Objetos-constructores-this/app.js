function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;


}

// Crear un prototipo
Cliente.prototype.tipoCliente = function() {
    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platino';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

// prototipo que imprime saldo y nombre

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre} - Saldo: ${this.saldo} , Tipo: ${this.tipoCliente()}`;
}

// Retirar saldo
Cliente.prototype.retirarSaldo = function(saldo) {
    return this.saldo -= saldo;
}


const cliente1 = new Cliente('Pedro', 1400);


console.log(cliente1.nombreClienteSaldo());
cliente1.retirarSaldo(500);
console.log(cliente1.nombreClienteSaldo());