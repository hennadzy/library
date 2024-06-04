const booksModel = require('../models/booksModel');

const getAllBooks = async (req, res) => {
  const books = await booksModel.getAllBooks();
  res.json(books);

};

const getBookById = async (req, res) => {
  const book = await booksModel.getBookById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Книга не найдена' });
  }
};

const createBook = async (req, res) => {
  await booksModel.createBook(req.body);
  res.json({ message: 'Книга создана успешно' });
};

const updateBook = async (req, res) => {
  await booksModel.updateBook(req.params.id, req.body);
  res.json({ message: 'Книга обновлена успешно' });
};

const deleteBook = async (req, res) => {
  await booksModel.deleteBook(req.params.id);
  res.json({ message: 'Книга удалена успешно' });
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };