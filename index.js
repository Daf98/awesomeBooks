const body = document.querySelector('body');
const bookList = document.createElement('ul');
bookList.classList.add('bookList');

const form = document.querySelector('.form');
body.insertBefore(bookList, form);

//Declare form elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const formButton = document.querySelector('.button');

function storeData() {
    const titleValue = bookTitle.value;
    const authorValue = bookAuthor.value;
   
    const book = {titleValue, authorValue};
   
    if (bookTitle && bookAuthor) {
       const stringedBook = JSON.stringify(book);
       localStorage.setItem('book', stringedBook);
    }
    bookArray.push(book);
   }
   formButton.addEventListener('click', storeData);

//Get data
let bookArray = [];
if (localStorage.getItem('book')) {
    let book = JSON.parse(localStorage.getItem('book'));
    let title = book.titleValue;
    let author = book.authorValue
    console.log("Title: " + title);
    console.log("Author: " + author);
}




/* let book = {bookTitle, bookAuthor}; */

/* function addBooks() {
    bookArray.push(book);
    }
button.addEventListener("click", addBooks); */

//Save to local data





