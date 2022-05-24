Render.displayLibrary();

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const formButton = document.querySelector('.form');
const bookList = document.querySelector('.bookList');

formButton.addEventListener('submit', (e) => {
  e.preventDefault();
  const UL = document.querySelector('.bookList');
  if (UL.textContent === null) return;

  UL.classList.add('active');
  const book = new Book(bookTitle.value, bookAuthor.value);
  Render.renderData(book);
  Storage.storeBooks(book);
  Render.clearField();
});

bookList.addEventListener('click', (e) => {
  const removeSingleBook = e.target.parentNode.children[0].textContent;
  Render.removUI(e.target);
  Storage.removeBook(removeSingleBook);
});