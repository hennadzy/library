const readersModel = require('../models/readersModel');
const Reader = require('../models/readersModel');

const filtReader = async (req, res) => {
  const readers = await readersModel.filtReader();
  res.json(readers);
};

const getAllReaders = async (req, res) => {
  const readers = await readersModel.getAllReaders();
  res.json(readers);
};

const getReaderById = async (req, res) => {
  const reader = await Reader.getReaderById(req.params.id);
  if (reader) {
    res.json(reader);
  } else {
    res.status(404).json({ message: 'Читатель не найден' });
  }
};

const createReader = async (req, res) => {
  await readersModel.createReader(req.body);
  res.json({ message: 'Читатель создан успешно' });
};

const updateReader = async (req, res) => {
  await readersModel.updateReader(req.params.id, req.body);
  res.json({ message: 'Читатель обновлен успешно' });
};

const deleteReader = async (req, res) => {
  await readersModel.deleteReader(req.params.id);
  res.json({ message: 'Читатель удален успешно' });
};

module.exports = { getAllReaders, getReaderById, createReader, updateReader, deleteReader };
