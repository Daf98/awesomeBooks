/* eslint-disable no-use-before-define */
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

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