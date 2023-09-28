const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        info =  `${title} by ${author}, ${pages}, ${read}.`
        return info;
        console.log(Book.info());
    }
    
}


function addBookToLibrary(Object) {
    myLibrary.push(Object);
    
  };

const bookTest = new Book('Harry', 'JK Rowling', 200, 'yes');
const bookTest2 = new Book('Harry 2', 'JK Rowling', 201, 'yes');

function displayBooks() {
    for (let i= 0; i < myLibrary.length ; i++) {
        const container = document.querySelector('#container'); 
        const div = document.createElement('div');
        div.textContent = `${myLibrary[i].title} ` + `${myLibrary[i].author}` + ` ${myLibrary[i].pages}`;
        container.appendChild(div);
    }
}

const btn = document.getElementById('#newBook');
btn.addEventListener('click', () => {
    
});