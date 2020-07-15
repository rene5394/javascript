// Leer el valor del textarea
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners(){
    // Cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);
    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);
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
}

function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
    }
}