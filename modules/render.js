import Store from "./store.js";
import Books from "./books.js";

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
      let bookArray = Store.getBooks();
      bookArray.forEach((book) => {
        singleBook += Render.genBookMarkup(book);
      });
      const bookList = document.querySelector('.bookList');
      bookList.innerHTML = singleBook;
    }
    static clearField() {
        const bookTitle = document.getElementById('title');
        const bookAuthor = document.getElementById('author');
      bookTitle.value = '';
      bookAuthor.value = '';
    }
  
  }
  export default Render;