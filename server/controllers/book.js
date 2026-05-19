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

        if(id && Number(id)) {
            const book = getBookById(id);
            res.send(book);
        } else {
            res.status(422).send('Invalid ID');
        }        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function createBook(req, res) {
  try {
        const newBook = req.body;
        if(req.body.name){
            insertBook(newBook);
            res.status(201).send('Book created!');
        } else {
            res.status(422).send('Invalid book data');
        }
        
  } catch (error) {
        res.status(500).send(error.message);
  }
}

function patchBook(req, res) {
  try {
        const id = req.params.id;

        if(id && Number(id)) {
            const newBook = req.body;
            changeBook(newBook, id);
            res.send('Book updated!');
        } else {
            res.status(422).send('Invalid ID');
        }        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteBook(req, res) {
  try {
        const id = req.params.id;

        if(id && Number(id)) {
            removeBook(id);
            res.send('Book deleted!');
        } else {
            res.status(422).send('Invalid ID');
        }     
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