//arreglo de objetos

const autos = [
    { modelo: 'Mustang', motor: 6.0 },
    { modelo: 'Camaro', motor: 8.0 },
    { modelo: 'Challenger', motor: 6.2 }

];


console.log(autos)
console.log(autos[0].modelo)

for (let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
}

autos[0].modelo = 'Otro modelo';
console.log(autos)