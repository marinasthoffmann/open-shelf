const fs = require('fs');

function getAllBooks() {
    const books = JSON.parse(fs.readFileSync('./books.json'));
    return books;
}

module.exports = {
    getAllBooks
};