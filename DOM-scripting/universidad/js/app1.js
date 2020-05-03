// Eliminar de Local Storage
localStorage.clear();

let elemento;
elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');


//scripts

elemento = document.scripts;

let imagenes = document.images; //HTMLcollection
let imagenesArray = Array.from(imagenes); //array

imagenesArray.forEach(function(imagen) {
    console.log(imagen);
})

console.log(imagenesArray);