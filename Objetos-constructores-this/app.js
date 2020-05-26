//string
const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');

console.log(nombre1);

console.log(nombre2)

if (typeof nombre1 == typeof nombre2) {
    console.log('Son iguales.')
} else {

    console.log('No son iguales.')
}

//boolean
const boolean1 = true;
const boolean2 = new Boolean(true);


//funciones
const f1 = function(a, b) {
    return a + b;
}

const f2 = new Function('a', 'b', 'return a + b');

// objetos
const persona1 = {
    nombre: 'Juan'
}

const persona2 = new Object({ nombre: 'Juan' })

// arreglos
const arreglo1 = [1, 2, 3, 4];
const arreglo2 = new Array(1, 2, 3, 4);

console.log(arreglo1);
console.log(arreglo2);