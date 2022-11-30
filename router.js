const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const ShowRouter = require('./views/ShowRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');
const LoanRouter = require('./views/LoanRouter');

//Rutas
router.use('/api', UserRouter); 
router.use('/movies', MovieRouter);
router.use('/shows', ShowRouter);
router.use('/categories', CategoryRouter);
router.use('/loans', LoanRouter);

module.exports = router;