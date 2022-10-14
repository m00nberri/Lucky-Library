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

const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        clickHandler(e);
    })
}

function clickHandler(e) {
    if (e.target.id === 'newBookButton') {
        modal.style.display = 'grid';
    }
    else if (e.target.id === 'closeButton') {
        modal.style.display = 'none';
    }
    else if (e.target.id === 'submitButton') {
        //do some stuff
    }
}

const modal = document.getElementById('newBookForm');