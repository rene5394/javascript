window.onload = function(){ 
    notesTextArea = document.getElementById('notes-textarea');
    notesTextArea.addEventListener('keyup', saveNotes);
    console.log(notesTextArea);

    if (localStorage.getItem("notes") === null || localStorage.getItem("notes") === "") {
        console.log('Its on if');
        saveNotes(); 
    }
    else{
        console.log('Its on else');
        notesTextArea.textContent = localStorage.getItem('notes');
    }
};

function saveNotes(){
    localStorage.setItem('notes', notesTextArea.value);
}  