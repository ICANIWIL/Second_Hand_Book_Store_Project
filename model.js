const Book = require('./models/Book');

// Add a new book
const addBook = async () => {
  const newBook = new Book({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
  });
  await newBook.save();
  console.log('Book added:', newBook);
};

addBook();
