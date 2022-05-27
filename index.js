// Declare elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const formButton = document.querySelector('.button');
const bookList = document.querySelector('.bookList');
// STORE //
class Store {
  // Get books from local storage
  static getBooks() {
    const books = localStorage.getItem('books');
    if (books) {
      return JSON.parse(books);
    }
    return [];
  }
  
  // Store books in local storage
  static storeBooks() {
    const stringedBooks = JSON.stringify(bookArray);
    localStorage.setItem('books', stringedBooks);
  }
}
let bookArray = Store.getBooks();

// BOOKS //
class Books {
  constructor(bookTitle, bookAuthor) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
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
    this.bookTitle = bookTitle.value;
    this.bookAuthor = bookAuthor.value;
    let title = this.bookTitle;
    let author = this.bookAuthor;
 
    let book = {
      title,
      author,
      id: Books.createId(),
    };
    bookArray.push(book);
    bookList.insertAdjacentHTML('beforeend', Render.genBookMarkup(book));
    Store.storeBooks();
    Render.clearField();
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
    title,
    author,
  }) {
    return `<li id=${id}><p class="book_title">${title}</p>
    <p class="book_author">${author}</p>
    <button class="removeButton" onclick="Books.removeBook(${id})">Remove</button></li>`;
  }
  // Create a function that renders the books
  static renderData() {
    let singleBook = '';
    bookArray.forEach((book) => {
      singleBook += Render.genBookMarkup(book);
    });
    bookList.innerHTML = singleBook;
  }
  static clearField() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }

}
Render.renderData();