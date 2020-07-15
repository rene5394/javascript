// Leer el valor del textarea
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners(){
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);
    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);
    // Cargar Tweets existentes
    document.addEventListener('DOMContentLoaded', localStorageListo);
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
    }
}

// Agregar un tweet
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir  el nuevi tweet
    tweets.push(tweet);
    //Convertir de String a arreglo para Local Storage
    localStorage.setItem('tweets'. JSON.stringify(tweets));
}

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

function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.array.forEach(function(element){
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