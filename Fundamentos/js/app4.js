// const numeros = [12, 34, 45, 56, 45];

// console.log(numeros)

const meses = Array('Enero', 'Febrero', 'Marzo');
console.log(meses)

// const mezcla = ['Hola', 20, true, undefined];
// console.log(mezcla)
console.log(Array.isArray(meses))

let nombre = 'Juan';
console.log(Array.isArray(nombre))

console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);

meses[4] = "Abril";
console.log(meses[4])
console.log(meses[3])

meses.push("Mayo");
meses.unshift("Antes de enero");
console.log(meses.indexOf('Abril'));
console.log(meses);

meses.pop();
console.log(meses)
meses.shift();
console.log(meses)

meses.splice(2, 2);
console.log(meses)

meses.reverse();
console.log(meses);

let a = [1, 2, 3],
    b = [9, 8, 7];

console.log(a.concat(b));

const frutas = ["Platano", "Manzano", "Fresas", "Naranjas"];

frutas.sort();
console.log(frutas);

a = [3, 1, 12, 100, 15, 7, 89, -8];
a.sort();
console.log(a);

//ordenar  correctamente los numeros
a.sort((x, y) => y - x);
console.log(a);