const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("favDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = document.querySelector("#confirmBtn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const table = document.getElementById("myTable");
const tBody = document.querySelector("tbody");
let index = 0;
const myLibrary = [];
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach(element => {
    const id = element.getAttribute('id')
    console.log(id)
    element.addEventListener("click", deleteBook(id))
    });

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


function deleteBook(index) {
    myLibrary.splice(index, 1)
};

function addBookToLibrary(Object) {
    myLibrary.push(Object);
    
  };

const bookTest = new Book('Harry', 'JK Rowling', 200, 'yes');
const bookTest2 = new Book('Harry 2', 'JK Rowling', 201, 'yes');

function displayBooks() {
     tBody.innerHTML = '';


    for (let i= 0; i < myLibrary.length ; i++) { 

        const row = tBody.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        let readBox = document.getElementById("myTable").rows[i+1].cells.item(3)
        let checkbox = document.createElement('input');
        let deleteButton = document.getElementById("myTable").rows[i+1].cells.item(4);
        let deleteButton2 = document.createElement('button');
        deleteButton2.type ="button";
        deleteButton2.innerText = "Delete"
        deleteButton2.className = "delete";
        deleteButton2.value = "value";
        deleteButton2.id = `${i}`;
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = `box` + `${i}`;
        // if (myLibrary[i].read.value === on) {
            //document.getElementByID("")
        //}
        readBox.appendChild(checkbox);
        deleteButton.appendChild(deleteButton2);

        cell1.innerHTML = `${myLibrary[i].title}`;
        cell2.innerHTML = `${myLibrary[i].author}`;
        cell3.innerHTML = `${myLibrary[i].pages}`;
       // cell4.innerHTML = `${myLibrary[i].read}`; 

      
        /*const div = document.createElement('div');
        div.textContent = `${myLibrary[i].title} ` + `${myLibrary[i].author}` + ` ${myLibrary[i].pages}`;
        container.appendChild(div); */
        // add remove button
        // add change read status button
    } 
    };



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
    displayBooks();
    
  });

