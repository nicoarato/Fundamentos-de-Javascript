// hoisting
obtenerNombre('nico')

function obtenerNombre(nombre) {
    console.log('su nombre es ' + nombre)
}

const obtenerApellido = (ape) => console.log('Su apellido es : ' + ape)
obtenerApellido('Arato')


// Binding
// tipos de this?

// implicit binding
const usuario = {
    nombre: 'Juan',
    edad: 20,
    info() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    },
    mascota: {
        nombre: 'Perra',
        info() {
            console.log(`Mi mascota se llama ${this.nombre}`)
        }
    }

}

usuario.info();
usuario.mascota.info();


// explicit binding

// call aply bind
function persona(e1, e2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${e1} y ${e2}.`)
}

const informacion = {
    nombre: 'Juan'
}

const musica = ['Rock', 'Cumbia'];

persona.call(informacion, musica[0], musica[1]);
persona.apply(informacion, musica);

const nuevaFn = persona.bind(informacion, musica[0], musica[1]);
nuevaFn();

// new binding se puede usar el this cuando creas el objeto...
function Auto(marca, modelo) {
    this.modelo = modelo;
    this.marca = marca;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto)