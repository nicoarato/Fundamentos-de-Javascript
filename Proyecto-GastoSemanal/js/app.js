// variables
const presupuestoUsuario = prompt("Cual es tu presupuesto");
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;
let presupuesto = presupuestoUsuario;


// clases
// classe de presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    // metodo para ir restando del presupuesto
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

//maneja todo lo relacionado al html

class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        // insertar
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');

        } else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(function() {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 2000);
    }

    // inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul');

        // crear un Li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        // insertar el gasto
        li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill"> $${cantidad} </span>
        `;

        // insertar en el html
        gastosListado.appendChild(li);

    }

    // comprueba el presupuesto restante
    presupuestoRestante(cantidad) {
        const restante = document.querySelector('#restante');
        // leemos presupuesto restante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }

    // cambio de color el presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        // comprobar el gasto
        if (presupuestoTotal / 4 > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        } else if (presupuestoTotal / 2 > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }

}



// event listeener
document.addEventListener('DOMContentLoaded', function() {
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    } else {
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        // instanciar clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

    }
});

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    //leemos los gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    // instanciar interfaz 
    const ui = new Interfaz();

    // comprobar que los campos no estan vacios
    if (nombreGasto === '' || cantidadGasto === '') {
        ui.imprimirMensaje('hubo un error', 'error');
    } else {
        // insertar en html
        ui.imprimirMensaje('Correcto', 'Correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }

})