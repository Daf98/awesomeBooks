/* eslint-disable no-unused-vars */


class Store {
  constructor() {}
  // Store array in local storage
  getBooks() {
    const books = localStorage.getItem('books');
    if (books) {
      return JSON.parse(books);
    }
    return [];
  }
// Store data in local storage
 storeBooks() {
  const stringedBooks = JSON.stringify(bookArray);
  localStorage.setItem('books', stringedBooks);
}
}


// Create actual array
let bookArray = getBooks();

// Declare elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const formButton = document.querySelector('.button');
const bookList = document.querySelector('.bookList');



// Create new id for each book
function createId() {
  if (bookArray.length > 0) {
    return bookArray[bookArray.length - 1].id + 1;
  }
  return 1;
}

// Create innerHTML

function genBookMarkup({
  id,
  titleValue,
  authorValue,
}) {
  return `<li id=${id}><p class="book_title">${titleValue}</p>
    <p class="book_author">${authorValue}</p>
    <button class="removeButton" onclick="removeBook(${id})">Remove</button></li>`;
}

// Create a function that adds books
function addData(e) {
  e.preventDefault();
  const titleValue = bookTitle.value;
  const authorValue = bookAuthor.value;
  const book = {
    titleValue,
    authorValue,
    id: createId(),
  };
  bookArray.push(book);
  bookList.insertAdjacentHTML('beforeend', genBookMarkup(book));
  storeBooks();
  return bookArray;
}
formButton.addEventListener('click', addData);

// Create a function that renders the data
function renderData() {
  let singleBook = '';
  bookArray.forEach((book) => {
    singleBook += genBookMarkup(book);
  });
  bookList.innerHTML = singleBook;
}
renderData();

// Create a function that removes books
function removeBook(bookId) {
  const bookItem = document.getElementById(bookId);
  bookItem.remove();
  bookArray = bookArray.filter((book) => book.id !== bookId);
  storeBooks();
}