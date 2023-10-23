const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("favDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = document.querySelector("#confirmBtn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
//const read = document.getElementById("yes");
const table = document.getElementById("myTable");
const tBody = document.querySelector("tbody");
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


function deleteBook(index) {
    myLibrary.splice(index, 1)
};

function addBookToLibrary(Object) {
    myLibrary.push(Object);
    
  };

const bookTest = new Book('Harry', 'JK Rowling', 200, 'yes');
const bookTest2 = new Book('Harry 2', 'JK Rowling', 201, 'yes');

function clearDisplay() {
    tBody.innerHTML = '';
}


function displayBooks() {
     clearDisplay()
    

    for (let i= 0; i < myLibrary.length ; i++) { 

        const row = tBody.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);


                    let deleteButton = document.getElementById("myTable").rows[i+1].cells.item(4);
                    let deleteButton2 = document.createElement('button');
                    deleteButton2.type ="button";
                    deleteButton2.innerText = "Remove";
                    deleteButton2.className = "deleteB";
                    deleteButton2.value = "value";
                    deleteButton2.id = `${i}`;
               
                        deleteButton.appendChild(deleteButton2);

                    let readButton = document.createElement('button');
                    readButton.type="button";
                    readButton.innerText = "Read";
                    readButton.className = "readB";
                    readButton.value = `${i}`;
                    readButton.id = `${i}` + 'read';

                        deleteButton.appendChild(readButton);

        cell1.innerHTML = `${myLibrary[i].title}`;
        cell2.innerHTML = `${myLibrary[i].author}`;
        cell3.innerHTML = `${myLibrary[i].pages}`;
        cell4.innerHTML = `${myLibrary[i].read}`; 

      
        
    } 
    delButtons()
    readButtons()
    };



showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    favDialog.close();
    let read = document.querySelector('input[name=read]:checked').value

    var addBook = new Book(title.value,author.value,pages.value,read) 
    addBookToLibrary(addBook);
    displayBooks();
    
  });

function delButtons() {
  const deleteButtons = document.querySelectorAll(".deleteB");
        deleteButtons.forEach((element) => {
            let id = element.getAttribute('id')
            element.addEventListener("click", () => {

           
                    


             deleteBook(id)
             displayBooks()
        });
            
            
            });
            
        }
function readButtons() {
    const readButtons = document.querySelectorAll(".readB");
        readButtons.forEach((element) => {
            let value = element.getAttribute('value')
            element.addEventListener("click", () => {
                toggleRead(value)
            } );
        });
    }

function toggleRead(value) {
    if (myLibrary[value].read === 'yes') {
        myLibrary[value].read =  'no'
        displayBooks()
    } else if (myLibrary[value].read === 'no') {
        myLibrary[value].read = 'yes'
        displayBooks()
    }
}