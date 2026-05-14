const express = require('express');
const bookRouter = require('./routes/book');

const app = express();

app.use('/books', bookRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});