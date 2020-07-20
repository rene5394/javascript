// Leer el valor del textarea
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners(){
    // Agregar Tweet
    document.getElementById('formulario').addEventListener('submit', agregarTweet);
    // Borrar Tweet
    listaTweets.addEventListener('click', borrarTweet);
    // Cargar Tweets existentes
    document.addEventListener('DOMContentLoaded', cargarTweetswLocalStorage);
}

// Funciones

//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    // Crear elemento y añadirlo al contenido de la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);

    // Añadir tweets a LocalStorage
    agregarTweetLocalStorage(tweet);
}

// Eliminar un tweet
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Agregar un tweet a Local Storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir  el nuevi tweet
    tweets.push(tweet);
    //Convertir de String a arreglo para Local Storage
    console.log(tweets);
    console.log(JSON.stringify(tweets));
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Obtener tweets de Local Storage
function obtenerTweetsLocalStorage(){
    let tweets;
    // Revisamos si hay tweets en Local Storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Cargar Tweets de Local Storage3
function cargarTweetswLocalStorage(){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        // Crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        // Crear elemento y añadirlo al contenido de la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}

// Borrar tweet de Local Storage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    tweetBorrar = tweet.substring(0, tweet.length -1);

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet, index){
        if(tweet === tweetBorrar){
            tweets.splice(index, 1);
        }
    });
    
    localStorage.setItem('tweets', JSON.stringify(tweets));
}