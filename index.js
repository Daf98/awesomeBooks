import Book from './modules/books.js';
import Storage from './modules/storage.js';
import Render from './modules/render.js';
import {
  DateTime,
} from './node_modules/luxon/build/es6/luxon.js';

const renderObj = new Render();
renderObj.displayLibrary();

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const formButton = document.querySelector('.form');
const bookList = document.querySelector('.bookList');
/* eslint-disable consistent-return */
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
// DIVs
const listOfBooks = document.querySelector('.list-of-books');
const bookForm = document.querySelector('.form');
const contactInfo = document.querySelector('.contact-info');
// nav bar links
const listLi = document.querySelector('.list-li');
const addLi = document.querySelector('.add-li');
const contactLi = document.querySelector('.contact-li');

listLi.addEventListener('click', () => {
  listOfBooks.classList.add('active');
  bookForm.classList.add('inactive');
  contactInfo.classList.remove('active');
});

addLi.addEventListener('click', () => {
  bookForm.classList.remove('inactive');
  listOfBooks.classList.remove('active');
  contactInfo.classList.remove('active');
});

contactLi.addEventListener('click', () => {
  contactInfo.classList.add('active');
  bookForm.classList.add('inactive');
  listOfBooks.classList.remove('active');
});

const dynamicDate = document.querySelector('.date');

dynamicDate.textContent = DateTime.now();