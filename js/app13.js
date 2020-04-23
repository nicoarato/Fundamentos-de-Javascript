//scope

var a = 'a';
let b = 'b';
const c = 'c';

function fScope() {
    var a = 'A';
    let b = 'B';
    const c = 'C'
    console.log('Funcion: ' + a, b, c)
}
fScope()

//scope de bloque

if (true) {
    var a = 'AA'; //Reescribe la variable global
    let b = 'BB';
    const c = 'CC'
    console.log('Bloque: ' + a, b, c)
}

for (var a = 0; a < 10; a++) {
    console.log(a) //se modifica del global
}

console.log('Globales: ' + a, b, c)