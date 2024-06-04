const express = require('express');
const copiesController = require('../controllers/copiesController');

const router = express.Router();

router.get('/', copiesController.getAllCopies);
router.get('/:id', copiesController.getCopyById);
router.post('/', copiesController.createCopy);
router.put('/:id', copiesController.updateCopy);
router.delete('/:id', copiesController.deleteCopy);
router.get('/book/:bookId/copies', copiesController.getCopiesByBookId);

module.exports = router;