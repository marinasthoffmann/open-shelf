function getBooks(req, res) {
  try {
        res.send('Hello World!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
  getBooks
};