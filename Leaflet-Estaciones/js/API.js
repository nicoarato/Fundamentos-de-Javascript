class API {
    async obtenerDatos() {

        const total = 500;
        // obtener datos
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // retornar como json
        const respuestaJson = await datos.json();
        return respuestaJson;
    }
}