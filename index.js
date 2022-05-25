/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
// Store array in local storage
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('.form');
const bookList = document.querySelector('.bookList');

// eslint-disable-next-line consistent-return
formButton.addEventListener('submit', (e) => {
  e.preventDefault();
  const UL = document.querySelector('.bookList');
  if (UL.textContent === null) return null;

  UL.classList.add('active');
  const book = new Book(title.value, author.value);
  Render.renderData(book);
  Storage.storeBooks(book);
  Render.clearField();
});

bookList.addEventListener('click', (e) => {
  const removeSingleBook = e.target.parentNode.children[0].textContent;
  Render.removUI(e.target);
  Storage.removeBook(removeSingleBook);
});