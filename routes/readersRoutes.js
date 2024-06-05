const express = require('express');
const readersController = require('../controllers/readersController');

const router = express.Router();

router.get('/', readersController.getAllReaders);
router.get('/:id', readersController.getReaderById);
router.post('/', readersController.createReader);
router.put('/:id', readersController.updateReader);
router.delete('/:id', readersController.deleteReader);
router.filt('/filt', readersController.filtReader);

module.exports = router;
