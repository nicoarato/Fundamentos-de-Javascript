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