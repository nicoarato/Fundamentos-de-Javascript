const salida = document.querySelector('#salida');
const microfono = document.querySelector('#speech');

microfono.addEventListener('click', ejecutarSpeechApi);

function ejecutarSpeechApi() {
    const SpeechRecongnition = webkitSpeechRecognition;

    const recognition = new SpeechRecongnition();
    recognition.start();
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando';
    };

    recognition.onspeechend = function() {
        salida.textContent = ' Se dejó de escuchar..';
        recognition.stop();
    };

    recognition.onresult = function(e) {
        console.log(e.results);
        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const confianza = document.createElement('p');
        confianza.innerHTML = `Confianza: ${confidence}`;


        salida.appendChild(speech);
        salida.appendChild(confianza);
    }

}