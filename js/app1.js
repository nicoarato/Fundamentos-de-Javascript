const n1 = 20;
const n2 = '20';
const n3 = "20";

console.log(n1 == n2);
console.log(n1 == n3);
console.log(n2 == n3);
console.log(n1 === n2);
console.log(n1 === n3);
console.log(n2 === n3);

console.log(null == undefined);
console.log(null === undefined);

const num1 = "50";
const num2 = 10;
const num3 = 'tres';

// console.log(num1 + num2);
console.log(num1 - num2);
console.log(Number(num1) + num2);

console.log(typeof(Number(num1)));
console.log(typeof(parseInt(num1)));


console.log(typeof(parseInt(num3)));
console.log(parseInt(num3));

let dato;
dato = Number("20");
dato = Number('20.121');
dato = Number(true);
dato = Number(null);
dato = Number(undefined);
dato = Number('Hola mundo');

dato = parseInt('100');
dato = parseFloat('100');



console.log(dato);
console.log(typeof(dato));

dato = 100.12313546845213541;
console.log(dato.toFixed());
console.log(dato.toFixed(3));

dato = '100';
console.log(dato.toFixed(3));