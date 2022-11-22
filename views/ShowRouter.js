const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ShowController = require('../controllers/ShowContoller');

// End-points CRUD shows
router.get('/', ShowController.getAll);
router.get('/:id', ShowController.getById);
router.get('/name/:title', ShowController.getByTitle);
router.post('/', ShowController.create);
router.put('/:id', ShowController.update);
router.delete('/', ShowController.deleteAll);
router.delete('/:id', ShowController.delete);

module.exports = router;