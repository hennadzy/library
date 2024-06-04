const issuesModel = require('../models/issuesModel');

const getAllIssues = async (req, res) => {
  const issues = await issuesModel.getAllIssues();
  res.json(issues);
};

const getIssueById = async (req, res) => {
  const issue = await issuesModel.getIssueById(req.params.id);
  if (issue) {
    res.json(issue);
  } else {
    res.status(404).json({ message: 'Выдача не найдена' });
  }
};

const createIssue = async (req, res) => {
  await issuesModel.createIssue(req.body);
  res.json({ message: 'Выдача создана успешно' });
};

const updateIssue = async (req, res) => {
  await issuesModel.updateIssue(req.params.id, req.body);
  res.json({ message: 'Выдача обновлена успешно' });
};

const deleteIssue = async (req, res) => {
  await issuesModel.deleteIssue(req.params.id);
  res.json({ message: 'Выдача удалена успешно' });
};


const getBooksInIssuesByReaderId = async (req, res) => {
  const booksInIssues = await issuesModel.getBooksInIssuesByReaderId(req.params.readerId);
  if (booksInIssues) {
    res.json(booksInIssues);
  } else {
    res.status(404).json({ message: 'Выдач не найдено' });
  }
};


module.exports = { getAllIssues, getIssueById, createIssue, updateIssue, deleteIssue, getBooksInIssuesByReaderId };