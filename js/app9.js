//fechas
const diaHoy = new Date();

//fecha especifica
let navidad2017 = new Date('12-25-2017');

let valor;

//mes de 0 a 11
valor = diaHoy.getMonth();

valor = diaHoy.getDay();
valor = diaHoy.getFullYear();


//Horas
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();

//milisegundos desde 1970
valor = diaHoy.getTime();


valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();
valor = diaHoy.setHours(21);
valor = diaHoy.getHours();



console.log(valor)