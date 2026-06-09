const express = require('express');
const bookRouter = require('./routes/book');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/books', bookRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});