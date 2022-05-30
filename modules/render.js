import Storage from './storage.js';

class Render {
  displayLibrary = () => {
    const bookArray = Storage.getBooks();
    bookArray.forEach((book) => Render.renderData(book));
  }

  static renderData = (book) => {
    const template = `<li class="render-li">
      <div class="li__first"> <span>"${book.titleValue}"</span> by <span>${book.authorValue}</span></div>
      <button class="removeButton">Remove</button>
      </li>`;
    document.querySelector('.bookList').insertAdjacentHTML('afterbegin', template);
  }

  static removUI = (book) => {
    if (book.classList.contains('removeButton')) {
      book.parentNode.remove();
    }
  }

  static clearField = () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    title.value = '';
    author.value = '';
  }
}
export default Render;