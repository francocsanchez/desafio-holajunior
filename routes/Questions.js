const express = require('express');
const router = express.Router();

const { getItems } = require('../controllers/questionsController');

// TODO: Routes
router.get('/', getItems);

module.exports = router;