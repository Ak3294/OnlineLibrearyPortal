console.log("This is index.js");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function Book(name, author, prize, publication, type) {
    this.name = name;
    this.author = author;
    this.prize = prize;
    this.publication = publication;
    this.type = type;
}

// Display Constructor


// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        
                          <th scope="col">${book.name}</th>
                          <th scope="col">${book.author}</th>
                          <th scope="col">${book.prize}</th>
                          <th scope="col">${book.publication}</th>
                          <th scope="col">${book.type}</th>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function / Clear Method to display Prototype
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2 || book.publication.length < 2 || book.prize.length < 2) {
        return false
    }
    else {
        return true;
    }
}


// Implement Submission Message after Add Book
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let publication = document.getElementById('publicationBook').value;
    let prize = document.getElementById('bookprize').value;
    let type;
    let programming = document.getElementById('programming');
    let datascience = document.getElementById('datascience');
    let graphics = document.getElementById('graphics');
    let networking = document.getElementById('networking');

    if (programming.checked) {
        type = programming.value;
    }
    else if (datascience.checked) {
        type = datascience.value;
    }
    else if (graphics.checked) {
        type = graphics.value;
    }
    else if (networking.checked) {
        type = networking.value;
    }


    let book = new Book(name, author, prize, publication, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
