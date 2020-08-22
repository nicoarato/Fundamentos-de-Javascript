// expresiones regulares

const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);

let valor, expReg;

// expReg = /[0123456789]/;
expReg = /[0-9]/;

valor = 1992;

// una fecha 20-10-1988
expReg = /\d\d-\d\d-\d\d\d\d/;

valor = '20-10-1988';

// hora 10:30
expReg = /\d\d:\d\d/;
valor = '10:30';
// 10:30 AM
expReg = /\d\d:\d\d \D\D/;
valor = '10:30';

// al menos 1 numero
expReg = /\d+/;
valor = 4654654;

// negamos con ^
expReg = /[^0-9]/;
valor = 'hola';

// fechas sintaxis {1,2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2018';
valor = '10-02-2003';

// evaluear letras o numeros
expReg = /\w+/;
valor = ' ';

// puos numeros?
expReg = /([0-9])\w+/;
valor = 'askdkld5454'; //falla

// puras mayusculas ?
expReg = /([A-Z])\w+/;
valor = 'asjdiSD'; //falla



console.log(expReg.test(valor));