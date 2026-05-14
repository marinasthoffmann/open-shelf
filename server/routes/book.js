const { Router } = require('express');
const { getBooks } = require('../controllers/book');

const router = Router();

router.get('/', getBooks);

router.post('/', (req, res) => {
  res.send('Book created!');
});

router.patch('/', (req, res) => {
  res.send('Book updated!');
});

router.delete('/', (req, res) => {
  res.send('Book deleted!');
});

module.exports = router;