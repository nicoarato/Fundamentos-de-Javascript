//variables

const carrito = document.getElementById('carrito');

const cursos = document.getElementById('lista-cursos');

const listaCursos = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//listener
cargarEventListeners();

function cargarEventListeners(e) {

    //dispara cuando se presiona "agregar a carrito"
    cursos.addEventListener('click', comprarCurso);
    //cuando se elimina una curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    //Al cargar documento cargar localstorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

//funciones.

//añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    //delegation para agregar carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        //enviamos el cursos para tomar sus datos
        leerDatosCurso(curso);
    }
}

//lee los datos del curso
function leerDatosCurso(curso) {

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')

    }

    insertarCarrito(infoCurso);
}

//muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {

    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img width="100px"src="${curso.imagen}"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

//eliminar un curso del carrito

function eliminarCurso(e) {

    e.preventDefault();

    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');

    }

    eliminarCursoLocalStorage(cursoId);
}

//elimina los cursos del carrito en el dom
function vaciarCarrito(e) {
    //forma lenta
    // listaCursos.innerHTML = '';

    //forma rapida recomendada
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    //vaciar localStorage
    vaciarLocalStorage();
    return false;
}

//almacena cursos del carrrito al localstorage

function guardarCursoLocalStorage(curso) {
    let cursos;

    //toma el valor de los cursos en localstorage
    cursos = obtenerCursosLocalStorage();

    //el curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));

}

function obtenerCursosLocalStorage() {
    let cursosLS;

    //compruebo si hay algo en ls
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];

    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;

}

//imprime los curso del locastorage en el carrito
function leerLocalStorage() {

    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso) {

        //construir el template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img width="100px"src="${curso.imagen}"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        listaCursos.appendChild(row);
    });
}

//elimina el curso por ID del localstorage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    //obtenemos arreglo de cursos
    cursosLS = obtenerCursosLocalStorage();

    //iteramos comparando el id del curso borrado con los del LS
    cursosLS.forEach(function(cursoLS, index) {
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);

        }
    });
    //añade el arreglo actual a storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//elimina todos los cursos de localstorage
function vaciarLocalStorage() {
    localStorage.clear();
}