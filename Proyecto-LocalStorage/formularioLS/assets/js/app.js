const listaTweets = document.getElementById('lista-tweets');



eventListeners();

function eventListeners() {
    //cuando se envia el formulario

    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //borrar twets
    listaTweets.addEventListener('click', borrarTweet);

    //contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}





function agregarTweet(e) {
    e.preventDefault();
    // console.log('Formulario enviado.')

    //Leer texto del texarea
    const tweet = document.querySelector('#tweet').value;

    //Crear el boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade boton de borrar
    li.appendChild(botonBorrar);
    //añade tweet a la lista
    listaTweets.appendChild(li);


    //añadir a localstorage.
    agregarTweetLocalStorage(tweet);

}



function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //añadir el nuevo tweet
    tweets.push(tweet);
    //convertir de string a un arreglo
    localStorage.setItem('tweets', JSON.stringify(tweets));


}

//mostrar datos del localstorage 

function localStorageListo() {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
        //Crear el boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        //añade boton de borrar
        li.appendChild(botonBorrar);
        //añade tweet a la lista
        listaTweets.appendChild(li);
    });

}

//comprobar que hay elelemtos en localstorage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;
    //revisamos los valores de localstorage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}


//elimina tweet del doms
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className == 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.textContent);

    }

}

//eliminar tweet de localstorage

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    //elimina x del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));

}