class UI {
    constructor() {


        var mapa;

        // instanciar api
        this.api = new API();

        // Crear markers con layerGroups
        this.markers = new L.LayerGroup();


        // iniciar mapa
        this.mapa = this.inicializarMapa();
    }

    inicializarMapa() {


        var map = L.map('mapa').setView([19.390519, -99.3739778], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            zoom: 18
        }).addTo(map);



        return map;

    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.results;
                // mostrar los pines.
                this.mostrarPines(resultado);

            })
    }

    mostrarPines(datos) {

        this.markers.clearLayers();

        // recorrer los establecimientos
        datos.forEach(dato => {
            // destructoring
            const { latitude, longitude, calle, regular, premium } = dato;

            // crear popup
            const opcionesPopUp = L.popup().setContent(`<p>Calle: ${calle}</p>
                                    <p><b>Regular: ${regular}</b></p>
                                    <p><b>Premium: ${premium}</b></p>`);

            // agregar pin
            const marker = new L.marker(
                [parseFloat(latitude), parseFloat(longitude)]
            ).bindPopup(opcionesPopUp);

            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);

    }


    // buscador
    obtenerSugerencias(busqueda) {

        this.api.obtenerDatos().then(datos => {
            const resultados = datos.results;

            // enviar json para el filtrado
            this.filtrarSugerencias(resultados, busqueda);
        })

    }

    // filtra sugerencias
    filtrarSugerencias(resultado, busqueda) {
        // filter
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);


        // mostrar pines
        this.mostrarPines(filtro);

    }
}