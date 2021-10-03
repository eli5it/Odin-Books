function Book(title, author, pages, isReadYet) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.isReadYet= isReadYet
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${isReadYet}`
    }
}
const book1 =  new Book("Harry Potter", "transphobia", '300', "not read yet");
console.log(book1.author);


