import Store from "./store.js";
import Render from "./render.js";

class Books {
    constructor(bookTitle, bookAuthor) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
    }

    // Create new id for each book
    static createId() {
        let bookArray = Store.getBooks();
        if (bookArray.length > 0) {
            return bookArray[bookArray.length - 1].id + 1;
        }
        return 1;
    }

    // Create a function that adds books
    static addData(e) {
        e.preventDefault();
        let bookArray = Store.getBooks();
        const bookTitle = document.getElementById('title');
        const bookAuthor = document.getElementById('author');
        const bookList = document.querySelector('.bookList');
        
        this.bookTitle = bookTitle.value;
        this.bookAuthor = bookAuthor.value;
        let book = {
            title: bookTitle.value,
            author: bookAuthor.value,
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

export default Books;