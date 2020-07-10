window.onload = function(){
    categories = {
        'Home': ['table', 'oven','microwave','bed'],
        'Clothes' : ['shirt','jersey','jeans','skirt','blouse'],
        'School': ['board, desk', 'chair', 'rule'],
        'Sports': ['soccer', 'basketball', 'tennis', 'baseball'],
        'Computer Parts': ['screen', 'mouse', 'keyboard', 'cpu']
    };

    select = document.getElementById('categories');
    select.addEventListener('change', startNewGame);
    
    /* Add Category to select element */
    Object.keys(categories).forEach((element) =>{
        let option = document.createElement('option');
        option.innerHTML= element;
        option.value = element;
        select.appendChild(option);
    })
};

function startNewGame(){
    category = select.value;
    randomNumber = Math.floor(Math.random() * categories[category].length);
    word = categories[category][randomNumber];
    alert(word);
}

