// constructor para seguro

class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;

    }

    cotizarSeguro() {

        /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
        */
        let cantidad;
        const base = 2000;
        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }

        // leer año
        const diferencia = new Date().getFullYear() - this.anio;
        // cada año de diferencia hay que reducir 3% del seguro
        cantidad -= ((diferencia * 3) * cantidad) / 100;

        /**
         * Si el seguro es basico se multiplica por 30% mas
         * Si el completo es basico se multiplica por 50% mas
         */
        if (this.tipo === 'basico') {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }
        return cantidad;


    }

}



//todo lo que se muestra
class Interfaz {

    // mensaje que se imprime
    mostrarMensaje(mensaje, tipo) {
            const div = document.createElement('div');

            if (tipo === 'error') {
                div.classList.add('mensaje', 'error');
            } else {
                div.classList.add('mensaje', 'correcto');
            }
            div.innerHTML = `${mensaje}`;
            formulario.insertBefore(div, document.querySelector('.form-group'));

            setTimeout(function() {
                document.querySelector('.mensaje').remove();
            }, 2000);

        }
        // imprime el resultado de la cotización
    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;
        switch (seguro.marca) {
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiatico';
                break;
            case '3':
                marca = 'Europeo';
                break;
        }

        // creamos un div
        const div = document.createElement('div');
        // insertar informacion
        div.innerHTML = `
            <p class='header'>Tu Resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: $${total}</p>
        `;

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(function() {
            spinner.style.display = 'none';
            resultado.appendChild(div);

        }, 2000);

    }

}





// eventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // leer marca seleccionada
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // leer el año
    const year = document.getElementById('anio');
    const yearSeleccionado = year.options[year.selectedIndex].value;

    //leer valor de radio buttom
    const tipo = document.querySelector('input[name="tipo"]:checked').value;


    // Crear una instancia de interfaz
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || yearSeleccionado === '' || tipo === '') {
        // interfaz imprimiendo error
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y volver a intentar.', 'error');

    } else {

        // limpiar resultados
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        // instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, yearSeleccionado, tipo);
        // Cotizar un seguro
        const cantidad = seguro.cotizarSeguro();
        // mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);

        interfaz.mostrarMensaje('Cotizando...', 'correcto');


    }


})


const max = new Date().getFullYear(),
    min = max - 20;


const selectAnio = document.getElementById('anio');

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnio.appendChild(option);
}