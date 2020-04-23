const numeros = [1, 2, 3];

// numeros = [2, 3, 4]
numeros[1] = 4;
numeros.push(5);
numeros.pop();
numeros.pop();
numeros.pop();

// console.log(numeros)

//Objetos

const persona = {
    nombre: "Miguel",
    apellido: "Sarsa",
    profesion: "Diseñador",
    email: "correo@gmail.com",
    musica: ["roxk", "reggae"],
    ciudad: {
        ciudad: "Santa Fe",
        localidad: "Esperanza"
    },
    edad: 28,
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona)
console.log(persona.email)

persona.musica.push("cumbia")
console.log(persona.musica)

console.log(persona.ciudad)

console.log(persona['ciudad']['ciudad'])
console.log(persona.ciudad.ciudad)

console.log(persona.nacimiento())