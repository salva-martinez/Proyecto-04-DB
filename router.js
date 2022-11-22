const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const ShowRouter = require('./views/ShowRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/movies',/*auth,*/ MovieRouter); //add auth
router.use('/shows',/*auth,*/ ShowRouter);
router.use('/categories',/*auth,*/ CategoryRouter);

module.exports = router;