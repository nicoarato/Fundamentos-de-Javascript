async function obtenerclientes() {
    // crear una promesa
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Clientes descargados...');
        }, 2000);
    })

    // simulando error
    const error = true;

    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject('Hubo un problema...');
    }

}

obtenerclientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));