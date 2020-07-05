class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                // crear select de opciones
                const select = document.querySelector('#criptomoneda');
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {

                    // añador el nombre y symbol de las opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })
    }


    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        //mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);

    }

    // imprime cotizacipon
    mostrarResultado(resultado, moneda, cripto) {

        // en caso de un resultado anteior en la pantalla, oculto 
        const resultadoAnterior = document.querySelector('#resultado > div');

        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        // console.log(resultado[cripto][moneda])
        const datosMoneda = resultado[cripto][moneda];

        // recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);
        let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');

        // construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de $ ${precio}</p>
                    <p>Variación último día: % ${porcentaje}</p>
                    <p>Última actualización:  ${actualizado}</p>
                </div>    
            </div>
        `;
        this.mostrarOcultarSpiner('block');

        setTimeout(() => {
            // insertar resultado
            document.querySelector('#resultado').innerHTML = templateHTML;
            // ocultar spiner
            this.mostrarOcultarSpiner('none');
        }, 3000);
    }

    // mostrar spiner de carga al cotizar
    mostrarOcultarSpiner(vista) {
        const spiner = document.querySelector('.contenido-spinner');
        spiner.style.display = vista;
    }
}