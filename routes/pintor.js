const express = require('express');

let pintor = require('../controllers/PintoresController');

let router = express.Router();

router.get('/', pintor.list);

module.exports = router;