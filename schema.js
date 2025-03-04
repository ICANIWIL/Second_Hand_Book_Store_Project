const { Schema, model } = require('mongoose');

// Example Schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
});

// Model
const Book = model('Book', bookSchema);

module.exports = Book;
