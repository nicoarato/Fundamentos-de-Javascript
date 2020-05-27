class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.apellido = apellido;
    }
    imprimirSaldo() {
        return `Hola ${this.nombre} tu saldo es $ ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platino';
        } else {
            tipo = 'Normal';
        }
    }

    // atributos staticos No necesitan una instancia
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const maria = new Cliente('Maria', 'Perez', 10000);

console.log(maria);
console.log(maria.imprimirSaldo());

// LLAMADA A STATIC
console.log(Cliente.bienvenida())

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
            //va al constructor padre
            super(nombre, '', saldo);
            // No existen en el constructor padre
            this.telefono = telefono;
            this.tipo = tipo;
        }
        // atributos staticos No necesitan una instancia
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}

const empresa = new Empresa('Empresa1', 100000, 34215486588, 'Construccion');

console.log(empresa);
console.log(empresa.imprimirSaldo());
console.log(Empresa.bienvenida())