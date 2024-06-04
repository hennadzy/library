const express = require('express');
const issuesController = require('../controllers/issuesController');

const router = express.Router();

router.get('/', issuesController.getAllIssues);
router.get('/:id', issuesController.getIssueById);
router.post('/', issuesController.createIssue);
router.put('/:id', issuesController.updateIssue);
router.delete('/:id', issuesController.deleteIssue);
router.get('/reader/:readerId/books', issuesController.getBooksInIssuesByReaderId);

module.exports = router;