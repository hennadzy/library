const copiesModel = require('../models/copiesModel');

const getAllCopies = async (req, res) => {
  const copies = await copiesModel.getAllCopies();
  res.json(copies);
};

const getCopyById = async (req, res) => {
  const copy = await copiesModel.getCopyById(req.params.id);
  if (copy) {
    res.json(copy);
  } else {
    res.status(404).json({ message: 'Экземпляр не найден' });
  }
};

const createCopy = async (req, res) => {
  await copiesModel.createCopy(req.body);
  res.json({ message: 'Экземпляр создан успешно' });
};

const updateCopy = async (req, res) => {
  await copiesModel.updateCopy(req.params.id, req.body);
  res.json({ message: 'Экземпляр обновлен успешно' });
};

const deleteCopy = async (req, res) => {
  await copiesModel.deleteCopy(req.params.id);
  res.json({ message: 'Экземпляр удален успешно' });
};

const getCopiesByBookId = async (req, res) => {
  const copiesOfBooks = await copiesModel.getCopiesByBookId(req.params.bookId);
  if (copiesOfBooks) {
    res.json(copiesOfBooks);
  } else {
    res.status(404).json({ message: 'Экземпляры не найдены' });
  }
};

module.exports = { getAllCopies, getCopyById, createCopy, updateCopy, deleteCopy, getCopiesByBookId };