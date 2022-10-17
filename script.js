function Book (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = Boolean(haveRead);
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, is ${this.pages} pages long, ${(this.haveRead) ? 'finished' : 'not read yet'}`
}

Book.prototype.createBookCard = function () {
    let bookShelf = document.getElementById('bookShelf')

    let card = document.createElement('div')
    card.classList.add('bookCard')

    let title = document.createElement('div')
    title.textContent = this.title;
    title.id = this.title;
    card.appendChild(title)

    let author = document.createElement('div')
    author.textContent = this.author;
    card.appendChild(author)

    let pages = document.createElement('div')
    let pagesLabel = document.createElement('span')
    pages.textContent = this.pages;
    pagesLabel.textContent = 'pages';
    card.appendChild(pages)

    let buttonContainer = document.createElement('div')
    let readLabel = document.createElement('span')
    readLabel.textContent = 'Read Status:';
    let readButton = document.createElement('button')
    buttonContainer.appendChild(readLabel)
    buttonContainer.appendChild(readButton)
    let delButton = document.createElement('button')
    delButton.textContent = 'Delete'
    buttonContainer.appendChild(delButton)
    card.appendChild(buttonContainer)

    bookShelf.appendChild(card)
}

const library = {
    bookShelf: [],
    addBook: function (title, author, pages) {
        let book = (new Book(title, author, pages))
        book.number = this.bookShelf.length;
        this.bookShelf.push(book);
    },
    populateShelf: function () {
        for (const book of this.bookShelf) {
            if (book.title === document.getElementById(book.title)) {
                continue
            }
            else {
                book.createBookCard();
                alert('pp fart')
            }
        }
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
            library.populateShelf();
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

function populateShelf () {
    for (const book of library.bookShelf) {
        if (book.title === document.getElementById(book.title)) {
            continue
        }
        else {
            book.createBookCard;
            alert('pp fart')
        }
    }
}