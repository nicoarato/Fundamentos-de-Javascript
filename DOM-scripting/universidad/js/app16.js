//Local storage y sesion storage

//agregar al localstorage.

localStorage.setItem('nombre', 'Juan');

sessionStorage.setItem('nombre', 'JOSE');

//eliminar
localStorage.removeItem('nombre');

localStorage.setItem('nombre', 'JOSESITO');

const nombre = localStorage.getItem('nombre');

console.log(nombre);

localStorage.clear();