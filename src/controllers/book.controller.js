const Book = require('../models/book.model')


exports.findAll = function (req, res) {
  console.log("working?")
  Book.findAll(function (error, book) {
    console.log("Controller")
    if (error) {
      res.send(error)
    }
    console.log("books", book)
    res.send(book)
  })
}

exports.create = function (req, res) {
  const newBook = new Book(req.body)

  //check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Book.create(newBook, function (err, book) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Book Created successfully!", data: book });
    });
  }
}

exports.findById = function (req, res) {
  Book.findById(req.params.id, function (err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Book.update(req.params.id, new Book(req.body), function (err, book) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Book successfully updated' });
    });
  }
};


exports.delete = function (req, res) {
  Book.delete(req.params.id, function (err, book) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Book successfully deleted' });
  });
};