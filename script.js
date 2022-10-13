function Book (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = Boolean(haveRead);
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, is ${this.pages} pages long, ${(this.haveRead) ? 'finished' : 'not read yet'}`
}

const libraryBuilding = {
    bookShelf: [],
    addBook: function (title, author, pages, haveRead) {
        let book = (new Book(title, author, pages, haveRead))
        this.bookShelf.push(book);
    }
}