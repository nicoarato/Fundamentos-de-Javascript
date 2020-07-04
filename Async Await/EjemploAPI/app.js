async function leerTodos() {
    //esperamos la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    // proccede cuando la respuesta esté hecha
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then(usuarios => console.log(usuarios))
    .catch(error => console.log(error));