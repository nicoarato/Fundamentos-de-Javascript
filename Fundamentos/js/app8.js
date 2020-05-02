function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completo')
    }, 3000);
}


try {

    algo();

} catch (error) {

    console.log(error);
} finally {
    console.log('No le importa, ejecuta de todos modos');
}


obtenerClientes();