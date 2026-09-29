const myLibrary = [];

function Book(bookName, author, pageCount) {
    this.id = crypto.randomUUID();
    this.bookName = bookName;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(bookName, author, pageCount) {
    const book = new Book(bookName, author, pageCount);
    myLibrary.push(book);
}