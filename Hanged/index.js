window.onload = function(){
    categories = {
        'Animals': ['dog', 'cat', 'snake', 'tiger', 'lion', 'wolf'],
        'Computer Parts': ['screen', 'mouse', 'keyboard', 'cpu'],
        'Sports': ['soccer', 'basketball', 'tennis', 'baseball'],              
        'Home': ['table', 'oven','microwave','bed'],
        'School': ['board', 'desk', 'chair', 'rule'],
        'Clothes' : ['shirt','jersey','jeans','skirt','blouse']
    };

    images = {
        0: [
          "+---+",
          "|       |",
          "        |",
          "        |",
          "        |",
          "        |",
        "=========",],
        1: [ 
          "+---+",
          "|       |",
          " O      |",
          "        |",
          "        |",
          "        |",
        "=========",],
        2: [ 
            "+---+",
            "|       |",
            " O      |",
            "|       |",
            "        |",
            "        |",
          "=========",],
        3: [ 
            "+---+",
            "|       |",
            " O      |",
            "/|       |",
            "        |",
            "        |",
          "=========",],
        4: [ 
            "+---+",
            "|       |",
            " O      |",
            "/|\\      |",
            "        |",
            "        |",
          "=========",],
        5: [ 
            "+---+",
            "|       |",
            " O      |",
            "/|\\      |",
            "/        |",
            "        |",
          "=========",], 
        6: [ 
            "+---+",
            "|       |",
            " O      |",
            "/|\\      |",
            "/ \\      |",
            "        |",
          "=========",],                                                 
    };
    
    alphabet = '';
    for(i=10;i<36;++i){
      alphabet+=i.toString(36);
    }

    loadAlphabet();
    // Block Alphabet before select category
    document.getElementById('alphabet-container').style.pointerEvents = 'none';

    fails = 0;
    guessed = 0;
    let imageHanged = '';
    let image = images[0];
    image.forEach( elem => imageHanged+=`<br />${elem}`);
    hanged = document.getElementById('hanged-image');
    hanged.innerHTML = imageHanged;
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
    // Unblock Alphabet before select category
    document.getElementById('alphabet-container').style.pointerEvents = 'auto';
    let category = select.value;
    let randomNumber = Math.floor(Math.random() * categories[category].length);
    let word = categories[category][randomNumber];
    localStorage.setItem('word', word);
    // Add word to the table
    let wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    for(i = 0;i < word.length; i++){
      let li = document.createElement('li');
      li.innerHTML = '_';
      wordContainer.appendChild(li);
    }
}

function loadAlphabet(){
    alphabetContainer = document.getElementById('alphabet-container');
    alphabetContainer.innerHTML = '';
    for(i = 0;i < alphabet.length; i++){
      let li = document.createElement('li');
      li.innerHTML = alphabet[i].toUpperCase();
      alphabetContainer.appendChild(li);
    }
    // Add Letter click action
    let alphabetList = document.querySelectorAll('#alphabet-container li');
    alphabetList.forEach(function(letter){
      letter.addEventListener('click', checkLetter);
    });     
}

function checkLetter(){
  let word = localStorage.getItem('word');
  let letters = document.querySelectorAll('#word-container li');
  let letterFound = false;
  // Block the letter selected
  this.classList = 'marked';
  // Compare word and letter selected
  for (i=0;i<word.length;i++){
    if(word[i]===this.innerHTML.toLowerCase()){
      letters[i].innerHTML = this.innerHTML;
      letterFound = true;
      guessed+=1;
    }
  }
  // If all the the letters were guessed
  if(guessed === word.length){
    setTimeout(function(){
      alert('YOU WIN!!');
      location.reload();
    }, 500); 
  }
  // If the letter wasn't foind in th word
  if(letterFound === false){
    fails += 1;
    let imageHanged = '';
    let image = images[fails];
    image.forEach( elem => imageHanged+=`<br />${elem}`);
    hanged.innerHTML = imageHanged;
    if(fails === 6){
      setTimeout(function(){
        alert('YOU LOSE!!');
        location.reload();
      }, 500);
    }
  }
}

