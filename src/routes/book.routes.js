const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller');

// Retrieve all books
router.get('/', bookController.findAll);

// Create a new book
router.post('/', bookController.create);

// Retrieve a single book with id
router.get('/:id', bookController.findById);

// Update a book with id
router.put('/:id', bookController.update);

// Delete a book with id
router.delete('/:id', bookController.delete);

module.exports = router