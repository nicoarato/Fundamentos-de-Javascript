//IIFE se invocan inmediatamente.

(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`)
})('javascript');

//metodos de propiedad

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo musica ${id}`);
    },
    pausar: function() {
        console.log(`Pausando musica`);
    }
}


//se pueden crear fuera de la definicion del objeto

musica.borrar = function() {
    console.log(`Borrando musica...`)
};


musica.reproducir(5);
musica.pausar();
musica.borrar();