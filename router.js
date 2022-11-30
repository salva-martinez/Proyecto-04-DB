const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const ShowRouter = require('./views/ShowRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');
// const LoanRouter = require('');

//Rutas
router.use('/api', UserRouter); //Rutas de Login y de register 
router.use('/movies', MovieRouter);
router.use('/shows', ShowRouter);
router.use('/categories', CategoryRouter);
// router.use('', );

module.exports = router;