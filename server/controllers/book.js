const { getAllBooks, getBookById, insertBook, changeBook, removeBook } = require('../services/books');

function getBooks(req, res) {
  try {
        const books = getAllBooks();
        res.send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getBook(req, res) {
  try {
        const id = req.params.id;
        const book = getBookById(id);
        res.send(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function createBook(req, res) {
  try {
        const newBook = req.body;
        insertBook(newBook);
        res.status(201).send('Book created!');
  } catch (error) {
        res.status(500).send(error.message);
  }
}

function patchBook(req, res) {
  try {
        const id = req.params.id;
        const newBook = req.body;
        changeBook(newBook, id);
        res.send('Book updated!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteBook(req, res) {
  try {
        const id = req.params.id;
        removeBook(id);
        res.send('Book deleted!');
        
  } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  patchBook,
  deleteBook
};