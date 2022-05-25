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
//DIVs
const listOfBooks = document.querySelector('.list-of-books');
const addBooks = document.querySelector('.add-book');
const contactInfo = document.querySelector('.contact-info');
//nav bar links
const listLi = document.querySelector('.list-li');
const addLi = document.querySelector('.add-li');
const contactLi = document.querySelector('.contact-li');

listLi.addEventListener("click", () => {
  listOfBooks.classList.add('active');
  addBooks.classList.remove('active');
  contactInfo.classList.remove('active');
})

addLi.addEventListener("click", () => {
  addBooks.classList.add('active');
  listOfBooks.classList.remove('active');
  contactInfo.classList.remove('active');
})

contactLi.addEventListener("click", () => {
  contactInfo.classList.add('active');
  addBooks.classList.remove('active');
  listOfBooks.classList.remove('active');
})