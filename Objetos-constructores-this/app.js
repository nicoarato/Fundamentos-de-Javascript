const Cliente = {
        imprimirSaldo: function() {
            return `Hola ${this.nombre} tu saldo es ${this.saldo}`
        },
        retirarSaldo: function(retiro) {
            return this.saldo -= retiro;
        }
    }
    // Crear el objeto
const maru = Object.create(Cliente);
maru.nombre = 'Maru';
maru.saldo = 100;

console.log(maru.imprimirSaldo())