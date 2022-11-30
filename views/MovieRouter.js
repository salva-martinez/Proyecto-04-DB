const express = require('express');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth');

//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/name/:title', MovieController.getByTitle);
router.post('/',middlewareBearer, MovieController.create);
router.put('/:id',middlewareBearer, MovieController.update);
router.delete('/',middlewareBearer, MovieController.deleteAll);
router.delete('/:id',middlewareBearer, MovieController.delete);

module.exports = router;