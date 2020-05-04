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

    let curso;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
    }
}

//elimina los cursos del carrito en el dom
function vaciarCarrito(e) {
    //forma lenta
    // listaCursos.innerHTML = '';

    //forma rapida recomendada
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
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