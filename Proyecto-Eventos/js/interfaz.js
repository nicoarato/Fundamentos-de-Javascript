class Interfaz {
    constructor() {
            this.init();
            // leer el resultado
            this.listado = document.getElementById('resultado-eventos');
        }
        // metorod para iniciar la app
    init() {
        this.imprimirCategorias();
    }

    // imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categories;
                // seleccionar el selec de categorias
                const selectCategoria = document.getElementById('listado-categorias');
                // Recorremos el arreglo e imprimimos los <option>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                });
            });
    }

    // metodo para imprimir mensajes
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        // buscar padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);

    }

    // desaparece mensaje si existe
    limpiarMensaje() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();

        }
    }

    // lee la respuesta de la api e imprime los resultados.active
    mostrarEventos(eventos) {
        // leer eventos y agregarlos a una variable.active
        const listaEventos = eventos.events;
        console.log(listaEventos);
        // recorrer eventos y formar su html
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        
                            <img class="img-fluid mb-2" src="${evento.logo!==null ? evento.logo.url : '../img/barni.jpg'}">
                        
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="text-info">Información del evento</p>
                                <p>${evento.description.text.substring(0,280)} ...</p>

                                <span class="badge badge-primary">Capacidad: ${evento.capacity===null ?'free':'asd'}</span>
                                <span class="badge badge-secondary">Capacidad: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-success btn-block mt-4" >Comprar boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })

    }

    limpiarResultados() {
        this.listado.innerHTML = '';
    }

}