let myLibrary = [];

const book1 =  new Book("Harry Potter", "transphobia", '300', true);
const book2 =  new Book("The iCarly chronices", "Dan the Feet man", "420", true);
const book3 =  new Book("The Great Gatsby", "F. Scott Fitzgerald", "350", false);
const book4 =  new Book('The Bible', "Many, many others", "4200", false);


const container = document.querySelector('.book-container');






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
function addBookToLibrary(book) {
    myLibrary.push(book);
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
        buttonContainer.classList.add('button-container');
        buttonStatic.textContent = "remove";
        
        newBook.classList.add('book');
        // appends corresponding three boxes for text
        titleHeading.textContent = element.title
        newBook.appendChild(titleHeading);

        authorHeading.textContent = element.author;
        newBook.appendChild(authorHeading);

        pagesHeading.textContent = element.pages;
        newBook.appendChild(pagesHeading);

        // appends two bottons
        
        if (element.isReadYet) {
            buttonChanges.classList.add('read');
            buttonChanges.textContent = "read" ;
        } else {
            buttonChanges.classList.add('unread');
            buttonChanges.textContent ='unread';
        }
        buttonContainer.appendChild(buttonStatic);
        buttonContainer.appendChild(buttonChanges);
        newBook.appendChild(buttonContainer);

        
        container.appendChild(newBook);
}


myLibrary = [book1, book2, book3, book4];

displayBooks(myLibrary); 

//<h3 class="book-title">Harry Porter</h3>
//<h3 class="author">Jk. Jimmy jones</h3>
//<h3 class="pages">400 pages</h3>
//<button>Read</button>
//<button></button>