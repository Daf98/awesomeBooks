// Declare elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const formButton = document.querySelector('.button');
const bookList = document.querySelector('.bookList');
// STORE //
class Store {
  // Store array in local storage
  static getBooks() {
    const books = localStorage.getItem('books');
    if (books) {
      return JSON.parse(books);
    }
    return [];
  }
  // Store data in local storage
  static storeBooks() {
    const stringedBooks = JSON.stringify(bookArray);
    localStorage.setItem('books', stringedBooks);
  }
}
// BOOKS //
class Books {
  constructor(bookTitle, bookAuthor) {
    bookTitle.value = this.titleValue;
    bookAuthor.value = this.authorValue;
    
    // Create actual array
    this.bookArray = Store.getBooks();
  }
  
  
  // Create new id for each book
  static createId() {
    if (bookArray.length > 0) {
      return bookArray[bookArray.length - 1].id + 1;
    }
    return 1;
  }

  // Create a function that adds books
  static addData(e) {

    e.preventDefault();
    const titleValue = bookTitle.value;
    const authorValue = bookAuthor.value;
    let book = {
      titleValue,
      authorValue,
      id: Books.createId(),
    };
    this.bookArray.push(book);
    bookList.insertAdjacentHTML('beforeend', genBookMarkup(book));
    Store.storeBooks();
    return bookArray;
  }
  // Create a function that removes books
  static removeBook(bookId) {
    const bookItem = document.getElementById(bookId);
    bookItem.remove();
    bookArray = bookArray.filter((book) => book.id !== bookId);
    Store.storeBooks();
  }
}
formButton.addEventListener('click', Books.addData);

// RENDER //
class Render {
  // Create innerHTML

  static genBookMarkup({
    id,
    titleValue,
    authorValue,
  }) {
    return `<li id=${id}><p class="book_title">${titleValue}</p>
    <p class="book_author">${authorValue}</p>
    <button class="removeButton" onclick="removeBook(${id})">Remove</button></li>`;
  }
  // Create a function that renders the data
  static renderData() {
    let singleBook = '';
    Books.bookArray.forEach((book) => {
      singleBook += genBookMarkup(book);
    });
    bookList.innerHTML = singleBook;
  }
}
// Render.renderData();