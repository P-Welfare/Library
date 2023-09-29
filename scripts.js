const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("favDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = document.querySelector("#confirmBtn");
var title = document.getElementById("title");
var author = document.getElementById("author");
var pages = document.getElementById("pages");
var read = document.getElementById("read");



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
    };


function clearDisplay() {
    const container = document.querySelector('#container');
    while (container.hasChildNodes())
    container.removeChild(container.firstChild)
    }
 

showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
   
   /* title = title.value;
    author = author.value; NOT SURE ON THIS
    pages = pages.value;
    read = read.value; */
    
    favDialog.close(); // Have to send the select box value here.
    // must work out this close value an
    var addBook = new Book(title.value,author.value,pages.value,read.value) 
    addBookToLibrary(addBook);
    clearDisplay();
    displayBooks();
    
  });

