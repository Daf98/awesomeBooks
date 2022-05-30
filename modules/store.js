class Store {
    // Get books from local storage
    static getBooks() {
      const books = localStorage.getItem('books');
      if (books) {
        return JSON.parse(books);
      }
      return [];
    }
    
    // Store books in local storage
    static storeBooks() {
    let bookArray = Store.getBooks();
      const stringedBooks = JSON.stringify(bookArray);
      localStorage.setItem('books', stringedBooks);
    }
  }
  export default Store;