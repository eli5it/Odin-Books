let myLibrary = [];


const inputButton = document.querySelector('.add-button');
const container = document.querySelector('.book-container');

const modal = document.querySelector('.modal');
const modalSubmitButton = modal.querySelector('button');
let modal_author =  modal.querySelector('.modal-author');

modalSubmitButton.addEventListener("click", function() {
    let inputtedTitle = modal.querySelector('.modal-title').value;
    let inputtedAuthor= modal.querySelector('.modal-author').value;
    let inputtedPages= modal.querySelector('.modal-pages').value;
    let checkbox = modal.querySelector('input[type = "checkbox"]');


    if (inputtedPages == '' || inputtedTitle == '' || inputtedAuthor == '') {
        alert('fill out the entire form please');
    } else { 
        // both adds book to myLibrary array and displays it
        addBookToLibrary(inputtedTitle, inputtedAuthor, inputtedPages, checkbox.checked);
        modal.classList.toggle("open");
        modalOverlay.classList.toggle("overlay-open");
        resetModal();
    }
    

})


const modalOverlay= document.querySelector('.modal-overlay');

inputButton.addEventListener("click", function() {
    modal.classList.toggle("open");
    modalOverlay.classList.toggle("overlay-open");
  });

modalOverlay.addEventListener('click', function() {
    modal.classList.toggle("open");
    modalOverlay.classList.toggle("overlay-open");
    resetModal();
})


function resetModal() {
    modal.querySelector('.modal-title').value = '';
    modal.querySelector('.modal-author').value = '';
    modal.querySelector('.modal-pages').value= '';
}



function Book(title, author, pages, isReadYet) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.isReadYet= isReadYet
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${isReadYet}`
    }
}


// Adds Book to the myLibrary array
// book -> returns nothing (modifies the myLibary array)
// I could also let it accept arrays and loop through
// but I don't currently see the advantage of that
// 
function addBookToLibrary(title, author, pages, isChecked) {
    let newBook = new Book(title, author, pages, isChecked);
    myLibrary.push(newBook);
    displayBook(newBook);
}

// removes specified book from the myLibrary Array
// book -> returns nothing (modifies the myLibrary array)

function removeBookFromLibrary(book) {
    myLibrary.splice(pos, 1);
}

// deletes every book from myLibrary Array
// 

function resetLibrary() {
    myLibrary.splice(0, myLibrary.length)
}

// iterates through each book in the myLibrary array and displays them
// I think I want them to have ids corresponding to their names (or the ids could just be nums)
//                                                              (i don't know that it's necessary to reset said nums even if
//                                                                books are delelted - not like anyone sees the nums)
// array -> html representations
// could place them all in a table and then display that table
// so I think you need to run this function whenever the webpage is reloaded
// so just call it once and then from there call displayBook

function displayBooks(arr) {
    for (const element of arr) {
        displayBook(element)}}

// U want to fix this at one book per section
// should I just displaybook? 
// --- as in add an additional book to the display only when one is entered
// and delete one when delete is pressed??? (i am going to do this)



// adds an html element for the inputted book
function displayBook(element){
    let newBook = document.createElement('div');
        let buttonChanges = document.createElement('button');
        let authorHeading = document.createElement('h3');
        let pagesHeading = document.createElement('h3');
        let titleHeading = document.createElement('h3');
        let buttonStatic  = document.createElement('button');
        let buttonContainer = document.createElement('div');
        let arrayPos = myLibrary.length - 1;
        newBook.id = "div-" + arrayPos;
        // newly created button now works functionally for deleting
        setRemoveButton(buttonStatic);
        buttonContainer.classList.add('button-container');
        buttonStatic.textContent = "remove";
        
        newBook.classList.add('book');
        // appends corresponding three boxes for text
        titleHeading.textContent = element.title;
        newBook.appendChild(titleHeading);

        authorHeading.textContent = element.author;
        newBook.appendChild(authorHeading);

        pagesHeading.textContent = `${element.pages} pages`
        newBook.appendChild(pagesHeading) ;

        // appends two bottons
        
        if (element.isReadYet) {
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





// I think I need to set event listeners upon each time the page is reloaded (assuming that at some point I implement local storage)


function setRemoveButton(button) {
    button.addEventListener('click',function()  {
        let deletePos = button.id;
        myLibrary.splice(deletePos, 1);
        updateDisplay(button);
        
        
    } 
    
        ) }



// finds parent div of button and deletes from doc
function updateDisplay(button) {
    let idVal = button.id;
    let divID = "div-" + idVal;
    let deleteDiv = document.getElementById(divID);
    deleteDiv.remove();
    console.log('current Id val is' + idVal)
    if (idVal < myLibrary.length) {
        updateButtonIds(idVal);
    }
}
// updates ids with their new corresponding array locations
 function updateButtonIds(pos) {
    console.log('im on the job');
    console.log(pos);
    let i = 1 + parseInt(pos);
    console.log(`i is currently ${i} and length is currently ${myLibrary.length}`);
    while ( i <= myLibrary.length) {
        console.log('i be changing ids');
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



// let readButtons = document.querySelectorAll('.read');
// readButtons.forEach(button => setReadToggle(button));


let unreadButtons = document.querySelectorAll('.unread');
unreadButtons.forEach(button => setReadToggle(button));
displayBooks(myLibrary); 