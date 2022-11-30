const express = require('express');
const router = express.Router();
const {middlewareBearer} = require('../middlewares/auth.js');


const LoansControllers = require('../controllers/LoansController');

router.post('/create', middlewareBearer, LoansControllers.create)

module.exports = router; 