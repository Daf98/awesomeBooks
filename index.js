//Create an array
let bookArray = []

//Declare form elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const formButton = document.querySelector('.button');

const body = document.querySelector('body');
const bookList = document.querySelector('.bookList');




const form = document.querySelector('.form');


//Create an addBook function
function addData(e) {
    e.preventDefault();
    console.log("its working")
    const titleValue = bookTitle.value;
    const authorValue = bookAuthor.value;
    let book = {titleValue, authorValue};
    bookArray.push(book); 
    console.log(bookArray);
    body.insertBefore(bookList, form);
    return bookArray;     
}

formButton.addEventListener('click', addData)

function renderData(){
    bookArray.forEach((book)=>{
        const singleBook = document.createElement('div');
        singleBook.classList.add('singleBook');
        singleBook.innerHTML= ` 
        <p class="book_title">${book.titleValue}</p>
        <p class="book_author">${book.authorValue}</p>
        <button class="removeButton">Remove</button>`
        bookList.appendChild(singleBook);
    })
    
}

formButton.addEventListener('click', renderData)

function removeData(){
    bookArray.filter((book)=>{
        
    })
}

/* 
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
    
    if (bookTitle && bookAuthor) {
       const stringedBook = JSON.stringify(book);
       localStorage.setItem('book', stringedBook);
    }
   }

   //formButton.addEventListener('click', storeData);

//Get data

if (localStorage.getItem('book')) {
    let book = JSON.parse(localStorage.getItem('book'));
    let title = book.titleValue;
    let author = book.authorValue
    console.log("Title: " + title);
    console.log("Author: " + author);
}

 */


/* let book = {bookTitle, bookAuthor}; */

/* function addBooks() {
    bookArray.push(book);
    }
button.addEventListener("click", addBooks); */

//Save to local data





