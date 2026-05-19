const fs = require('fs');

function getAllBooks() {
    const books = JSON.parse(fs.readFileSync('./books.json'));
    return books;
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('./books.json'));
    const book = books.filter(book => book.id === id)[0];
    return book;
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync('./books.json'));
    const newBooksList = [...books, newBook];
    fs.writeFileSync('./books.json', JSON.stringify(newBooksList));
}

function changeBook(newBook, id) {
    let books = JSON.parse(fs.readFileSync('./books.json'));
    const modifiedIndex = books.findIndex(book => book.id === id);
    const changedData = { ...books[modifiedIndex], ...newBook };
    books[modifiedIndex] = changedData;
    fs.writeFileSync('./books.json', JSON.stringify(books));
}

function removeBook(id) {
    let books = JSON.parse(fs.readFileSync('./books.json'));
    const newBooksList = books.filter(book => book.id !== id);
    fs.writeFileSync('./books.json', JSON.stringify(newBooksList));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    changeBook,
    removeBook
};