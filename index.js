import Store from "./modules/store.js";
import Books from "./modules/books.js";
import Render from "./modules/render.js";

const renderObj = new Render();
const storeObj = new Store();
// Declare elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const formButton = document.querySelector('.button');
const bookList = document.querySelector('.bookList');



// BOOKS //

formButton.addEventListener('click', Books.addData);

// RENDER //

Render.renderData();