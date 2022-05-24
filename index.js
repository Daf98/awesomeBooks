/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */

// Store array in local storage
class Book {
  titleValue;

  authorValue;

  constructor(titleValue, authorValue) {
    this.titleValue = titleValue;
    this.authorValue = authorValue;
  }
}

class Storage {
  static getBooks() {
    let library;
    if (!localStorage.getItem('library')) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    return library;
  }

  static storeBooks(book) {
    const bookArray = Storage.getBooks();
    bookArray.push(book);
    localStorage.setItem('library', JSON.stringify(bookArray));
  }

  static removeBook(book) {
    const bookArray = Storage.getBooks();
    bookArray.forEach((arr) => {
      if (`"${arr.titleValue}" by ${arr.authorValue}`.trim() === book.trim()) {
        bookArray.splice(bookArray.indexOf(arr), 1);
      }
    });
    localStorage.setItem('library', JSON.stringify(bookArray));
  }
}

class Render {
  static displayLibrary() {
    const bookArray = Storage.getBooks();
    bookArray.forEach((book) => Render.renderData(book));
  }

  static renderData(book) {
    const template = `<li>
    <div class="li__first"> <span>"${book.titleValue}"</span> by <span>${book.authorValue}</span></div>
    <button class="removeButton">Remove</button>
    </li>`;
    document.querySelector('.bookList').insertAdjacentHTML('afterbegin', template);
  }

  static removUI(book) {
    if (book.classList.contains('removeButton')) {
      book.parentNode.remove();
    }
  }

  static clearField() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }
}

Render.displayLibrary();
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const formButton = document.querySelector('.form');
const bookList = document.querySelector('.bookList');

formButton.addEventListener('submit', (e) => {
  e.preventDefault()
  const book = new Book(bookTitle.value, bookAuthor.value)
  Render.renderData(book)
  Storage.storeBooks(book)
  Render.clearField()
})

bookList.addEventListener('click', (e) => {
  const removeSingleBook = e.target.parentNode.children[0].textContent;
  Render.removUI(e.target);
  Storage.removeBook(removeSingleBook);
});