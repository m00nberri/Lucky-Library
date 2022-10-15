function Book (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = Boolean(haveRead);
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, is ${this.pages} pages long, ${(this.haveRead) ? 'finished' : 'not read yet'}`
}

//Book.prototype.createBookCard = function () {}

const library = {
    bookShelf: [],
    addBook: function (title, author, pages) {
        let book = (new Book(title, author, pages))
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
        clearForm ();
        modal.style.display = 'grid';
    }
    else if (e.target.id === 'closeButton') {
        clearForm ();
        modal.style.display = 'none';
    }
    else if (e.target.id === 'submitButton') {
        if (formValidate()) {
            library.addBook(document.forms['formo']['book title'].value,document.forms['formo']['author'].value,document.forms['formo']['number of pages'].value);
            modal.style.display = 'none';
        }
        else {
            alert('you dick fuck');
        }
    }
    
}

const modal = document.getElementById('newBookForm');

function formValidate () {
    let x = document.forms['formo']['book title'].value;
    let y = document.forms['formo']['author'].value;
    let z = document.forms['formo']['number of pages'].value;
    if ((x || y || z) === '') {
        console.log('buttpeen');
        return false;
    }
    else {
        return true;
    }
};

function clearForm () {
    document.forms['formo']['book title'].value = '';
    document.forms['formo']['author'].value = '';
    document.forms['formo']['number of pages'].value = '';
};