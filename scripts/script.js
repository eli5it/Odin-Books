// Global Constant
// internal representation of library in array form



// Data Structures

class Book {
    constructor(title, author, pages, isReadYet) {
        this.title = title;
        this.author = author;
        this.pages  = pages;
        this.isReadYet= isReadYet;
    }

    // Getter
    get info() {
        return this.showInfo();
    }
    // Method
    showInfo() {
        return `${title} by ${author}, ${pages} pages, ${isReadYet}`
    }
}

// Library Class shit

class Library {
    constructor() {
        this.books = [];
    }
    addBookToLibrary(title, author, pages, isChecked) {
        let newBook = new Book(title, author, pages, isChecked);
        this.books.push(newBook);
        this.displayBook(newBook);
    }
    removeBookFromLibrary(book) {
        this.splice(pos, 1);
    }
    displayBook(book){
        let newBook = document.createElement('div');
            let buttonChanges = document.createElement('button');
            let authorHeading = document.createElement('h3');
            let pagesHeading = document.createElement('h3');
            let titleHeading = document.createElement('h3');
            let buttonStatic  = document.createElement('button');
            let buttonContainer = document.createElement('div');
            let arrayPos = myLibrary.books.length - 1;
            newBook.id = "div-" + arrayPos;
            // newly created button now works functionally for deleting
            setRemoveButton(buttonStatic);
            buttonContainer.classList.add('button-container');
            buttonStatic.textContent = "remove";
            
            newBook.classList.add('book');
            // appends corresponding three boxes for text
            titleHeading.textContent = book.title;
            newBook.appendChild(titleHeading);

            authorHeading.textContent = book.author;
            newBook.appendChild(authorHeading);
    
            pagesHeading.textContent = `${book.pages} pages`
            newBook.appendChild(pagesHeading) ;
    
            // appends two bottons
            
            if (book.isReadYet) {
                buttonChanges.classList.add('read');
                buttonChanges.textContent = "read" ;
            } else {
                buttonChanges.textContent ='unread';
            }
            buttonChanges.classList.add('unread');
            buttonStatic.classList.add('remove-button');
            buttonStatic.id = arrayPos;
            setReadToggle(buttonChanges);
    
            buttonContainer.appendChild(buttonStatic);
            buttonContainer.appendChild(buttonChanges);
            newBook.appendChild(buttonContainer);
    
            
            container.appendChild(newBook);
    }
    displayBooks(arr) {
        for (const element of arr) {
            displayBook(element)}}
    resetLibrary() {
        this.splice(0, myLibrary.length)
        }
            

}

const myLibrary = new Library();










// User Interface


// Global Display Constants


const inputButton = document.querySelector('.add-button');
const container = document.querySelector('.book-container');
const modal = document.querySelector('.modal');
const modalSubmitButton = modal.querySelector('button');
const modal_author =  modal.querySelector('.modal-author');
const modalOverlay= document.querySelector('.modal-overlay');

// display controller



function resetModal() {
    modal.querySelector('.modal-title').value = '';
    modal.querySelector('.modal-author').value = '';
    modal.querySelector('.modal-pages').value= '';
}


modalSubmitButton.addEventListener("click", function() {
    let inputtedTitle = modal.querySelector('.modal-title').value;
    let inputtedAuthor= modal.querySelector('.modal-author').value;
    let inputtedPages= modal.querySelector('.modal-pages').value;
    let checkbox = modal.querySelector('input[type = "checkbox"]');


    if (inputtedPages == '' || inputtedTitle == '' || inputtedAuthor == '') {
        alert('fill out the entire form please');
    } else { 
        // both adds book to myLibrary array and displays it
        myLibrary.addBookToLibrary(inputtedTitle, inputtedAuthor, inputtedPages, checkbox.checked);
        modal.classList.toggle("open");
        modalOverlay.classList.toggle("overlay-open");
        resetModal();
    }
    

})


inputButton.addEventListener("click", function() {
    modal.classList.toggle("open");
    modalOverlay.classList.toggle("overlay-open");
  });

modalOverlay.addEventListener('click', function() {
    modal.classList.toggle("open");
    modalOverlay.classList.toggle("overlay-open");
    resetModal();
})



// adds an html element for the inputted book
// I think I need to set event listeners upon each time the page is reloaded (assuming that at some point I implement local storage)


function setRemoveButton(button) {
    button.addEventListener('click',function()  {
        let deletePos = button.id;
        myLibrary.books.splice(deletePos, 1);
        updateDisplay(button);
        
        
    } 
    
        ) }



// finds parent div of button and deletes from doc
function updateDisplay(button) {
    let idVal = button.id;
    let divID = "div-" + idVal;
    let deleteDiv = document.getElementById(divID);
    deleteDiv.remove();
    if (idVal < myLibrary.books.length) {
        updateButtonIds(idVal);
    }
}
// updates ids with their new corresponding array locations
 function updateButtonIds(pos) {
    let i = 1 + parseInt(pos);
    console.log(i);
    while ( i <= myLibrary.books.length) {
        let currentButton = document.getElementById(i);
        let currentDiv = document.getElementById("div-" + i);
        let newIdVal= currentButton.id -1;
        currentButton.id -=1;
        currentDiv.id = "div-" +newIdVal;
        i++;

    }
}
function setReadToggle(button) {
    button.addEventListener('click',function()  {
       if (button.textContent == 'unread') {
           button.textContent = 'read'
       } else {button.textContent ='unread'}
       button.classList.toggle('read');
       
})}




let removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach(button => setRemoveButton(button));


let unreadButtons = document.querySelectorAll('.unread');
unreadButtons.forEach(button => setReadToggle(button));




