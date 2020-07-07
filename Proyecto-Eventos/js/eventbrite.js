 class EventBrite {

     constructor() {
         this.token_auth = 'C55URJMB3J5VEZIDABLE';
         this.ordenar = 'date';

     }

     //  obtinene las categorias en init
     async obtenerCategorias() {
         // consultar a la api
         const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
         // esperar las respuestas y devolver el json
         const categorias = await respuestaCategorias.json();

         return categorias;

     }

     //  mostrar resultados de la busqueda
     async obtenerEventos(evento, categoria) {
         const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/venues/1/events/?token=${this.token_auth}`);

         //  esperar la respuesta yd evolver json
         const eventos = await respuestaEvento.json();
         return eventos;


     }


 }